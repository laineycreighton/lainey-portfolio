// Shows the image if src is set. Otherwise shows a clearly marked placeholder
// with the ideal size, so you know exactly what file to drop in.
// Pass `eager` for images near the top of the page so they load right away.
export default function Img({ src, alt, ratio = '3 / 2', size, label, className = '', eager = false }) {
  if (src) {
    return (
      <img
        className={`img ${className}`}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        style={{ aspectRatio: ratio }}
      />
    )
  }
  return (
    <div className={`img placeholder ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder: ${alt}`}>
      <span className="placeholder-tag">Image placeholder</span>
      <span className="placeholder-label">{label || alt}</span>
      {size && <span className="placeholder-size">{size}</span>}
    </div>
  )
}
