export function Thumbnail({ url }: { url: string }) {
  return (
    <picture>
      <img src={url} className="size-full bg-white object-cover!" alt="" />
    </picture>
  );
}
