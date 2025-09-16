export async function fetchAllPosts(fullUrl) {

    try {
 

        const res = await fetch(fullUrl);

        if (res.ok) {
            const post = await res.json();
            return post;
        } else {
            console.error("Error", res.status)
            return { error: true, status: res.status }
            throw new Error(`Request failed with ${res.status}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
