const BASE_URL = "https://api.takprodam.ru/v2/publisher";

export async function getProducts(limit = 150, page = 1) {
  const token = import.meta.env.VITE_TAKPRODAM_API_TOKEN;
  const source = import.meta.env.VITE_SOURCE_ID;

  const url = `${BASE_URL}/product/?source_id=${source}&limit=${limit}&page=${page}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.items ?? [];
}

export function mapToProduct(p: any) {
  return {
    id: String(p.id),
    title: p.title,
    price: p.price,
    currency: "₽",
    imageUrl: p.image_url,
    affiliateLink: p.tracking_link,
    marketplace: p.marketplace_title,
    rating: 5,
    reviewsCount: 0,
    description: "",
  };
}
