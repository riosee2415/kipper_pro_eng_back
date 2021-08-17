import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    colorImage: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `ColorImages`,
      },
    ],
    productType: {
      type: String,
      required: true,
    },
    productSubType: {
      type: String,
      required: true,
    },
    keyType: {
      type: String,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    productIcon: {
      type: String,
      required: true,
    },
    iconContent1: {
      type: String,
      required: true,
    },

    productContent: {
      type: String,
      required: true,
    },
    warningContent: {
      type: String,
      required: true,
    },
    settingImage: {
      type: String,
      required: true,
    },
    settingTitle: {
      type: String,
      required: true,
    },
    settingContent: {
      type: String,
      required: true,
    },
    pointTitle: {
      type: String,
      required: true,
    },
    pointContent1: {
      type: String,
      required: false,
    },
    pointContent2: {
      type: String,
      required: false,
    },
    pointContent3: {
      type: String,
      required: false,
    },
    featureImage1: {
      type: String,
      required: true,
    },
    featureTitle1: {
      type: String,
      required: true,
    },
    featureSubTitle1: {
      type: String,
      required: true,
    },
    featureContent1: {
      type: String,
      required: true,
    },
    featureImage2: {
      type: String,
      required: true,
    },
    featureTitle2: {
      type: String,
      required: true,
    },
    featureSubTitle2: {
      type: String,
      required: true,
    },
    featureContent2: {
      type: String,
      required: true,
    },
    specName: {
      type: String,
      required: true,
    },
    specImage1: {
      type: String,
      required: true,
    },
    specImage2: {
      type: String,
      required: true,
    },
    specImage3: {
      type: String,
      required: true,
    },
    specDetailTitle1: {
      type: String,
      required: false,
    },
    specDetailContent1: {
      type: String,
      required: false,
    },
    specDetailImage1: {
      type: String,
      required: false,
    },
    specDetailTitle2: {
      type: String,
      required: false,
    },
    specDetailContent2: {
      type: String,
      required: false,
    },
    specDetailImage2: {
      type: String,
      required: false,
    },
    specDetailTitle3: {
      type: String,
      required: false,
    },
    specDetailContent3: {
      type: String,
      required: false,
    },
    specDetailImage3: {
      type: String,
      required: false,
    },
    finalTitle: {
      type: String,
      required: true,
    },
    finalContent: {
      type: String,
      required: true,
      default: "-",
    },
    cerIconImage1: {
      type: String,
      required: false,
    },
    cerIconImage2: {
      type: String,
      required: false,
    },
    cerIconImage3: {
      type: String,
      required: false,
    },
    cerIconImage4: {
      type: String,
      required: false,
    },
    cerIconImage5: {
      type: String,
      required: false,
    },
    cerIconImage6: {
      type: String,
      required: false,
    },
    cerContent1: {
      type: String,
      required: false,
    },
    cerContent2: {
      type: String,
      required: false,
    },
    cerContent3: {
      type: String,
      required: false,
    },
    cerContent4: {
      type: String,
      required: false,
    },
    cerContent5: {
      type: String,
      required: false,
    },
    cerContent6: {
      type: String,
      required: false,
    },
    filePath1: {
      type: String,
      required: true,
      default: `-`,
    },
    fileOriginName1: {
      type: String,
      required: true,
      default: `-`,
    },
    filePath2: {
      type: String,
      required: true,
      default: `-`,
    },
    fileOriginName2: {
      type: String,
      required: true,
      default: `-`,
    },
    thumbnailPath: {
      type: String,
      required: true,
      default: `-`,
    },
    thumbnailPath2: {
      type: String,
      required: true,
      default: `-`,
    },
    createdAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: String,
      required: true,
      default: `-`,
    },
    price: {
      type: String,
      required: true,
      default: "0",
    },
    vipPrice1: {
      type: String,
      required: true,
      default: "0",
    },
    vipPrice2: {
      type: String,
      required: true,
      default: "0",
    },
    sort: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Product`, Product, `Product`);
