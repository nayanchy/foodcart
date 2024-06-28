import { gql, request } from "graphql-request";
const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL;
const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories(first: 50) {
        id
        name
        slug
        updatedAt
        icon {
          id
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};

const GetBusiness = async (category) => {
  let queryParams;
  if (category === "all") {
    queryParams = `restaurants()`;
  } else {
    queryParams = `restaurants(where: { categories_some: { slug: "${category}"} })`;
  }
  const query = gql`
    query GetBusiness {
      ${queryParams} {
        aboutUs
        address
        name
        id
        banner {
          url
        }
        workingHours
        categories {
          name
        }
        rastaurantType
        slug
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const GetBusinessDetails = async (slug) => {
  const query = `query Restaurant {
  restaurant(where: {slug: "${slug}"}) {
    aboutUs
    categories {
      name
    }
    menu {
      ... on Menu {
        id
        category
        menuItem {
          ... on MenuItem {
            id
            name
            price
            description
            productImage {
              url
            }
          }
        }
      }
    }
    address
    banner {
      url
    }
    rastaurantType
    workingHours
    slug
    name
  }
}
`;
  const result = await request(MASTER_URL, query);
  return result;
};

export default { GetCategory, GetBusiness, GetBusinessDetails };
