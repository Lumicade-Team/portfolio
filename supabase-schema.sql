-- Blog posts table
create table if not exists posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  cover_image text,
  tags text[] default '{}',
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at();

-- Storage bucket for blog images
-- Run in Supabase dashboard > Storage > New bucket:
--   Name: blog-images
--   Public: true

-- RLS policies
-- NOTE: Currently open access for admin portal without auth.
-- Add authentication and tighten these policies before going to production.
alter table posts enable row level security;

-- Allow public read of published posts
create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- Allow all operations via anon key (for admin portal)
-- TODO: Replace with auth-based policy before production
create policy "Allow all operations"
  on posts for all
  using (true)
  with check (true);

-- Contact messages table
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table contact_messages enable row level security;

-- Allow public inserts from the website contact form
create policy "Public can insert contact messages"
  on contact_messages for insert
  with check (true);

-- Allow reads/management via service role on backend only
create policy "Service role can read contact messages"
  on contact_messages for select
  using (auth.role() = 'service_role');

-- Newsletter subscribers table
create table if not exists newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger newsletter_subscribers_updated_at
  before update on newsletter_subscribers
  for each row
  execute function update_updated_at();

alter table newsletter_subscribers enable row level security;

-- Allow website newsletter form to subscribe/update by email
create policy "Public can upsert newsletter subscribers"
  on newsletter_subscribers for insert
  with check (true);

create policy "Service role can update newsletter subscribers"
  on newsletter_subscribers for update
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- Allow backend service role to read subscribers
create policy "Service role can read newsletter subscribers"
  on newsletter_subscribers for select
  using (auth.role() = 'service_role');

-- Allow reads for current admin portal setup using anon key
create policy "Public can read newsletter subscribers"
  on newsletter_subscribers for select
  using (true);
