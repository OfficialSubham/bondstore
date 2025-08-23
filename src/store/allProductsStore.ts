import type {
  ProductCategory,
  ProductInter,
} from "@codersubham/bond-store-types";
import { selector } from "recoil";

export const mockProducts: ProductInter[] = [
  {
    productId: 1,
    productName: "Classic Mens Wallet",
    productDesc: "Made from premium leather, compact and durable.",
    productPrice: 1200,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 1,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet1/400",
        fileId: "file_wallet1",
      },
      {
        imgId: 2,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet2/400",
        fileId: "file_wallet2",
      },
      {
        imgId: 3,
        productId: 1,
        imgUrl: "https://picsum.photos/seed/wallet3/400",
        fileId: "file_wallet3",
      },
    ],
  },
  {
    productId: 2,
    productName: "Luxury Leather Bag",
    productDesc:
      "Spacious design with elegant stitching, perfect for office use.",
    productPrice: 4500,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 4,
        productId: 2,
        imgUrl: "https://picsum.photos/seed/bag1/400",
        fileId: "file_bag1",
      },
      {
        imgId: 5,
        productId: 2,
        imgUrl: "https://picsum.photos/seed/bag2/400",
        fileId: "file_bag2",
      },
      {
        imgId: 6,
        productId: 2,
        imgUrl: "https://picsum.photos/seed/bag3/400",
        fileId: "file_bag3",
      },
    ],
  },
  {
    productId: 3,
    productName: "Imported Travel Bag",
    productDesc: "Durable imported material, lightweight and stylish.",
    productPrice: 3800,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 7,
        productId: 3,
        imgUrl: "https://picsum.photos/seed/imported1/400",
        fileId: "file_imported1",
      },
      {
        imgId: 8,
        productId: 3,
        imgUrl: "https://picsum.photos/seed/imported2/400",
        fileId: "file_imported2",
      },
      {
        imgId: 9,
        productId: 3,
        imgUrl: "https://picsum.photos/seed/imported3/400",
        fileId: "file_imported3",
      },
    ],
  },
  {
    productId: 4,
    productName: "Trendy Hand Clutch",
    productDesc: "Compact clutch for parties and casual outings.",
    productPrice: 1500,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 10,
        productId: 4,
        imgUrl: "https://picsum.photos/seed/clutch1/400",
        fileId: "file_clutch1",
      },
      {
        imgId: 11,
        productId: 4,
        imgUrl: "https://picsum.photos/seed/clutch2/400",
        fileId: "file_clutch2",
      },
      {
        imgId: 12,
        productId: 4,
        imgUrl: "https://picsum.photos/seed/clutch3/400",
        fileId: "file_clutch3",
      },
    ],
  },
  {
    productId: 5,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 6,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "mensidebag" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 7,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "mensidebag" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 8,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "mensidebag" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 9,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 10,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "menswallet" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 11,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "leatherbags" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 12,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "leatherbags" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 13,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "importedbags" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 14,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "handclutch" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 15,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "mensidebag" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
  {
    productId: 15,
    productName: "Urban Men’s Side Bag",
    productDesc: "Modern design with multiple compartments for daily use.",
    productPrice: 2000,
    productCategory: "handclutch" as ProductCategory,
    productImages: [
      {
        imgId: 13,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag1/400",
        fileId: "file_sidebag1",
      },
      {
        imgId: 14,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag2/400",
        fileId: "file_sidebag2",
      },
      {
        imgId: 15,
        productId: 5,
        imgUrl: "https://picsum.photos/seed/sidebag3/400",
        fileId: "file_sidebag3",
      },
    ],
  },
];

export const bulkProduct = selector<ProductInter[] | null>({
  key: "bulkProduct",
  get: () => {
    return mockProducts;
  },
});
