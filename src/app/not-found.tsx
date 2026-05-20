import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6 text-center">
      <p className="text-[10px] font-inter tracking-[0.4em] uppercase text-canvas-gold">
        404 Not Found
      </p>
      <h1 className="text-6xl md:text-8xl font-inter font-light text-canvas-black">
        404
      </h1>
      <p className="text-sm text-canvas-muted max-w-sm">
        お探しのページが見つかりませんでした。URLをご確認いただくか、トップページからお探しください。
      </p>
      <Button href="/" variant="primary">
        トップページへ
      </Button>
    </div>
  );
}
