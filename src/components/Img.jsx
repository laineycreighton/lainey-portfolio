// Shows the image if src is set.
// Without a src, shows `fallback` (a designed panel) when given, or a marked placeholder
// with the ideal size, so you know exactly what file to drop in.
// Pass `eager` for images near the top of the page so they load right away.
export default function Img({ src, alt, ratio = '3 / 2', size, label, className = '', eager = false, fallback }) {
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
  if (fallback) {
    return (
      <div className={`img fallback ${className}`} style={{ aspectRatio: ratio }} aria-hidden="true">
        <span className="fallback-value">{fallback.value}</span>
        {fallback.label && <span className="fallback-label">{fallback.label}</span>}
      </div>
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
