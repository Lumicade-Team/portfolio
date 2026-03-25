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
