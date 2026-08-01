// Curated homestay/hill-cottage photos (free Unsplash License) — cycled
// deterministically per homestay ID so the same homestay always shows the
// same photo across the homepage cards and its own detail page.
const homestayPhotos = [
  "https://images.unsplash.com/photo-1587293005014-ecd16293d120?w=1200&q=80&auto=format&fit=crop", // Himachal Pradesh, India
  "https://images.unsplash.com/photo-1737112227544-0b5b3ef51719?w=1200&q=80&auto=format&fit=crop", // Swiss mountain cabin
  "https://images.unsplash.com/photo-1592770397923-85e1612ef7af?w=1200&q=80&auto=format&fit=crop", // Zakopane, Poland
  "https://images.unsplash.com/photo-1584003734930-b12779f66351?w=1200&q=80&auto=format&fit=crop", // Bhutan
  "https://images.unsplash.com/photo-1610687660051-9fe41058f9b8?w=1200&q=80&auto=format&fit=crop", // Wyoming, USA
  "https://images.unsplash.com/photo-1625066282607-41c9c7693304?w=1200&q=80&auto=format&fit=crop", // Tirol, Austria
];

export function photoForHomestay(id) {
  if (!id) return homestayPhotos[0];
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash + id.charCodeAt(i)) % homestayPhotos.length;
  return homestayPhotos[hash];
}
