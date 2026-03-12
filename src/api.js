import { state } from "./main.js";
import { createPagesNavigation } from "./pagination.js";

// Mock data — used as fallback when the external API is down
const MOCK_IMAGES = {
  total_pages: 5,
  pages: [
    {
      page: 1,
      data: [
        {
          id: "mock-001",
          image_url: "https://picsum.photos/id/10/600/400",
          likes_count: 12,
          comments: [{ name: "Alex", comment: "Beautiful forest!" }],
          category: "Nature",
          authorName: "Elena Petrova",
        },
        {
          id: "mock-002",
          image_url: "https://picsum.photos/id/11/600/400",
          likes_count: 8,
          comments: [],
          category: "Nature",
          authorName: "Marcus Chen",
        },
        {
          id: "mock-003",
          image_url: "https://picsum.photos/id/13/600/400",
          likes_count: 15,
          comments: [{ name: "Sara", comment: "Amazing view" }],
          category: "Landscape",
          authorName: "Yuki Tanaka",
        },
        {
          id: "mock-004",
          image_url: "https://picsum.photos/id/14/600/400",
          likes_count: 5,
          comments: [],
          category: "Nature",
          authorName: "Liam O'Brien",
        },
        {
          id: "mock-005",
          image_url: "https://picsum.photos/id/15/600/400",
          likes_count: 20,
          comments: [
            { name: "Tom", comment: "Great shot!" },
            { name: "Mia", comment: "Love it" },
          ],
          category: "Landscape",
          authorName: "Sofia Andersson",
        },
        {
          id: "mock-006",
          image_url: "https://picsum.photos/id/16/600/400",
          likes_count: 9,
          comments: [],
          category: "Nature",
          authorName: "Raj Patel",
        },
        {
          id: "mock-007",
          image_url: "https://picsum.photos/id/17/600/400",
          likes_count: 14,
          comments: [{ name: "Kim", comment: "Moody vibes" }],
          category: "Urban",
          authorName: "Anna Kowalski",
        },
        {
          id: "mock-008",
          image_url: "https://picsum.photos/id/18/600/400",
          likes_count: 7,
          comments: [],
          category: "Nature",
          authorName: "Daniel Müller",
        },
        {
          id: "mock-009",
          image_url: "https://picsum.photos/id/19/600/400",
          likes_count: 11,
          comments: [],
          category: "Architecture",
          authorName: "Clara Dubois",
        },
        {
          id: "mock-010",
          image_url: "https://picsum.photos/id/20/600/400",
          likes_count: 3,
          comments: [{ name: "Leo", comment: "Nice texture" }],
          category: "Urban",
          authorName: "Hugo Svensson",
        },
      ],
    },
    {
      page: 2,
      data: [
        {
          id: "mock-011",
          image_url: "https://picsum.photos/id/21/600/400",
          likes_count: 18,
          comments: [],
          category: "Architecture",
          authorName: "Isla Campbell",
        },
        {
          id: "mock-012",
          image_url: "https://picsum.photos/id/22/600/400",
          likes_count: 6,
          comments: [{ name: "Jay", comment: "Old town charm" }],
          category: "Urban",
          authorName: "Noah Fischer",
        },
        {
          id: "mock-013",
          image_url: "https://picsum.photos/id/23/600/400",
          likes_count: 22,
          comments: [],
          category: "Landscape",
          authorName: "Amara Osei",
        },
        {
          id: "mock-014",
          image_url: "https://picsum.photos/id/24/600/400",
          likes_count: 10,
          comments: [],
          category: "Nature",
          authorName: "Felix Larsson",
        },
        {
          id: "mock-015",
          image_url: "https://picsum.photos/id/25/600/400",
          likes_count: 25,
          comments: [
            { name: "Ella", comment: "Stunning!" },
            { name: "Max", comment: "Wow" },
          ],
          category: "Nature",
          authorName: "Zara Khan",
        },
        {
          id: "mock-016",
          image_url: "https://picsum.photos/id/26/600/400",
          likes_count: 4,
          comments: [],
          category: "Architecture",
          authorName: "Oscar Nilsson",
        },
        {
          id: "mock-017",
          image_url: "https://picsum.photos/id/27/600/400",
          likes_count: 16,
          comments: [{ name: "Lily", comment: "Love the light" }],
          category: "Urban",
          authorName: "Chloe Martin",
        },
        {
          id: "mock-018",
          image_url: "https://picsum.photos/id/28/600/400",
          likes_count: 2,
          comments: [],
          category: "Nature",
          authorName: "Ethan Brooks",
        },
        {
          id: "mock-019",
          image_url: "https://picsum.photos/id/29/600/400",
          likes_count: 19,
          comments: [],
          category: "Landscape",
          authorName: "Maya Singh",
        },
        {
          id: "mock-020",
          image_url: "https://picsum.photos/id/30/600/400",
          likes_count: 8,
          comments: [{ name: "Ava", comment: "Peaceful" }],
          category: "Nature",
          authorName: "Lucas Bergström",
        },
      ],
    },
    {
      page: 3,
      data: [
        {
          id: "mock-021",
          image_url: "https://picsum.photos/id/31/600/400",
          likes_count: 13,
          comments: [],
          category: "Urban",
          authorName: "Olivia Park",
        },
        {
          id: "mock-022",
          image_url: "https://picsum.photos/id/32/600/400",
          likes_count: 7,
          comments: [{ name: "Ben", comment: "Cool angle" }],
          category: "Architecture",
          authorName: "James Wright",
        },
        {
          id: "mock-023",
          image_url: "https://picsum.photos/id/33/600/400",
          likes_count: 21,
          comments: [],
          category: "Landscape",
          authorName: "Freya Holm",
        },
        {
          id: "mock-024",
          image_url: "https://picsum.photos/id/34/600/400",
          likes_count: 11,
          comments: [],
          category: "Nature",
          authorName: "Aiden Cruz",
        },
        {
          id: "mock-025",
          image_url: "https://picsum.photos/id/35/600/400",
          likes_count: 17,
          comments: [{ name: "Zoe", comment: "Dreamy" }],
          category: "Nature",
          authorName: "Nadia Rossi",
        },
        {
          id: "mock-026",
          image_url: "https://picsum.photos/id/36/600/400",
          likes_count: 5,
          comments: [],
          category: "Urban",
          authorName: "Samuel Lee",
        },
        {
          id: "mock-027",
          image_url: "https://picsum.photos/id/37/600/400",
          likes_count: 14,
          comments: [],
          category: "Architecture",
          authorName: "Isabella Costa",
        },
        {
          id: "mock-028",
          image_url: "https://picsum.photos/id/38/600/400",
          likes_count: 9,
          comments: [{ name: "Jack", comment: "Minimalist beauty" }],
          category: "Landscape",
          authorName: "Theo Lindgren",
        },
        {
          id: "mock-029",
          image_url: "https://picsum.photos/id/39/600/400",
          likes_count: 23,
          comments: [],
          category: "Nature",
          authorName: "Aria Nakamura",
        },
        {
          id: "mock-030",
          image_url: "https://picsum.photos/id/40/600/400",
          likes_count: 6,
          comments: [],
          category: "Urban",
          authorName: "William Johansson",
        },
      ],
    },
    {
      page: 4,
      data: [
        {
          id: "mock-031",
          image_url: "https://picsum.photos/id/41/600/400",
          likes_count: 15,
          comments: [{ name: "Emma", comment: "So vibrant" }],
          category: "Nature",
          authorName: "Hannah Kim",
        },
        {
          id: "mock-032",
          image_url: "https://picsum.photos/id/42/600/400",
          likes_count: 10,
          comments: [],
          category: "Architecture",
          authorName: "Oliver Strand",
        },
        {
          id: "mock-033",
          image_url: "https://picsum.photos/id/43/600/400",
          likes_count: 8,
          comments: [],
          category: "Landscape",
          authorName: "Mila Torres",
        },
        {
          id: "mock-034",
          image_url: "https://picsum.photos/id/44/600/400",
          likes_count: 19,
          comments: [{ name: "Luca", comment: "Brilliant composition" }],
          category: "Urban",
          authorName: "Sebastian Ek",
        },
        {
          id: "mock-035",
          image_url: "https://picsum.photos/id/45/600/400",
          likes_count: 3,
          comments: [],
          category: "Nature",
          authorName: "Leah Fernandez",
        },
        {
          id: "mock-036",
          image_url: "https://picsum.photos/id/46/600/400",
          likes_count: 12,
          comments: [],
          category: "Landscape",
          authorName: "David Nyström",
        },
        {
          id: "mock-037",
          image_url: "https://picsum.photos/id/47/600/400",
          likes_count: 7,
          comments: [{ name: "Nina", comment: "Atmospheric" }],
          category: "Urban",
          authorName: "Sophie Blanc",
        },
        {
          id: "mock-038",
          image_url: "https://picsum.photos/id/48/600/400",
          likes_count: 16,
          comments: [],
          category: "Architecture",
          authorName: "Alexander Borg",
        },
        {
          id: "mock-039",
          image_url: "https://picsum.photos/id/49/600/400",
          likes_count: 4,
          comments: [],
          category: "Nature",
          authorName: "Eva Lindqvist",
        },
        {
          id: "mock-040",
          image_url: "https://picsum.photos/id/50/600/400",
          likes_count: 20,
          comments: [{ name: "Oscar", comment: "My favorite!" }],
          category: "Landscape",
          authorName: "Carlos Rivera",
        },
      ],
    },
    {
      page: 5,
      data: [
        {
          id: "mock-041",
          image_url: "https://picsum.photos/id/51/600/400",
          likes_count: 11,
          comments: [],
          category: "Urban",
          authorName: "Ruby Walsh",
        },
        {
          id: "mock-042",
          image_url: "https://picsum.photos/id/52/600/400",
          likes_count: 14,
          comments: [{ name: "Iris", comment: "Unique perspective" }],
          category: "Architecture",
          authorName: "Erik Sandberg",
        },
        {
          id: "mock-043",
          image_url: "https://picsum.photos/id/53/600/400",
          likes_count: 9,
          comments: [],
          category: "Nature",
          authorName: "Hana Yoshida",
        },
        {
          id: "mock-044",
          image_url: "https://picsum.photos/id/54/600/400",
          likes_count: 18,
          comments: [],
          category: "Landscape",
          authorName: "Axel Forsberg",
        },
        {
          id: "mock-045",
          image_url: "https://picsum.photos/id/55/600/400",
          likes_count: 6,
          comments: [{ name: "Vera", comment: "Serene" }],
          category: "Nature",
          authorName: "Luna Herrera",
        },
        {
          id: "mock-046",
          image_url: "https://picsum.photos/id/56/600/400",
          likes_count: 22,
          comments: [],
          category: "Urban",
          authorName: "Marcus Lund",
        },
        {
          id: "mock-047",
          image_url: "https://picsum.photos/id/57/600/400",
          likes_count: 5,
          comments: [],
          category: "Architecture",
          authorName: "Stella Greco",
        },
        {
          id: "mock-048",
          image_url: "https://picsum.photos/id/58/600/400",
          likes_count: 13,
          comments: [{ name: "Kai", comment: "Perfect timing" }],
          category: "Nature",
          authorName: "Wilma Hedström",
        },
        {
          id: "mock-049",
          image_url: "https://picsum.photos/id/59/600/400",
          likes_count: 8,
          comments: [],
          category: "Landscape",
          authorName: "Dante Moretti",
        },
        {
          id: "mock-050",
          image_url: "https://picsum.photos/id/60/600/400",
          likes_count: 17,
          comments: [
            { name: "Alma", comment: "Gorgeous colors" },
            { name: "Filip", comment: "Incredible" },
          ],
          category: "Nature",
          authorName: "Saga Björk",
        },
      ],
    },
  ],
};

let usingMockData = false;

const loadFromMock = (page) => {
  const mockPage = MOCK_IMAGES.pages.find((p) => p.page === page);
  if (!mockPage) return;

  state.totalAmountOfPages = MOCK_IMAGES.total_pages;

  state.loadedPages.push(page);
  state.loadedPages.sort((a, b) => a - b);

  state.imagesData.push(JSON.parse(JSON.stringify(mockPage)));
  state.imagesData.sort((a, b) => a.page - b.page);

  createPagesNavigation();
};

export const loadPageFromAPI = async (page) => {
  if (state.loadedPages.includes(page)) return;

  if (usingMockData) {
    loadFromMock(page);
    return;
  }

  try {
    const response = await fetch(
      `https://image-feed-api.vercel.app/api/images?page=${page}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    if (!json.data || !Array.isArray(json.data)) {
      throw new Error("Invalid data format received from API");
    }

    state.totalAmountOfPages = json.total_pages;
    delete json.total_pages;

    state.loadedPages.push(json.page);
    state.loadedPages.sort((a, b) => a - b);

    state.imagesData.push(json);
    state.imagesData.sort((a, b) => a.page - b.page);

    createPagesNavigation();
  } catch (error) {
    console.warn("API unavailable, switching to mock data:", error.message);
    usingMockData = true;
    loadFromMock(page);
  }
};

export const updateLikesAPI = async (ID, method) => {
  if (method !== "DELETE" && method !== "POST") {
    console.log("Error in updateLikesAPI() - bad argument.");
    return;
  }

  if (usingMockData) {
    return;
  }

  try {
    const response = await fetch(
      `https://image-feed-api.vercel.app/api/images/${ID}/like`,
      {
        method: method,
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Failed to update likes on server:", error);
  }
};
