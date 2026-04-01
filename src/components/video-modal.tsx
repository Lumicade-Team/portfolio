import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}`;
  } else {
    src = props.src;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-none bg-gray-900 p-0 [&>button]:text-white [&>button]:opacity-70 [&>button]:hover:opacity-100">
        <DialogTitle className="sr-only">Video</DialogTitle>
        <iframe width="100%" height="500" src={src} allowFullScreen />
      </DialogContent>
    </Dialog>
  );
}
