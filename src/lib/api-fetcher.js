const API_BASE_URL = "https://dummyjson.com/c/a7c4-016a-47aa-8241";
export async function fetchAllPosts() {
  try {
    const res = await fetch(API_BASE_URL);

    if (res.ok) {
      const post = await res.json();
      return post;
    } else {
      console.error("Error", res.status);
      return { error: true, status: res.status };
      throw new Error(`Request failed with ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

