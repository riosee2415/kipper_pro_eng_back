import Product from "../../../models/Product";
import ColorImages from "../../../models/ColorImages";
import { CURRENT_TIME } from "../../../../utils/commonUtils";
import mongoose from "mongoose";

export default {
  Query: {
    getProductListByType: async (_, args) => {
      const { searchValue, productType, productSubType } = args;

      try {
        const result = await Product.find({
          productType: { $regex: `.*${productType}.*` },
          productSubType: { $regex: `.*${productSubType}.*` },
          isDelete: false,
        }).sort({
          sort: 1,
        });

        let finalResult = result.filter((data) => {
          if (
            data.keyType
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.mainTitle
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.modelName
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });

        return finalResult;
      } catch (error) {
        console.log(error);
        return [];
      }
    },

    getProduct: async (_, args) => {
      const { searchName, searchType } = args;

      try {
        const result = await Product.find({
          productName: { $regex: `.*${searchName}.*` },
          productType: { $regex: `.*${searchType}.*` },
          isDelete: false,
        })
          .populate({
            path: `colorImage`,
            model: ColorImages,
          })
          .sort({ sort: 1 });
        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getProductOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Product.findOne({
          _id: id,
        }).populate({
          path: `colorImage`,
          model: ColorImages,
          options: {
            sort: {
              sort: 1,
            },
          },
        });

        return result;
      } catch (error) {
        console.log(error);
        return {};
      }
    },
  },

  Mutation: {
    registerProduct: async (_, args) => {
      const {
        thumbnailPath,
        thumbnailPath2,
        colorImage,
        productType,
        productSubType,
        keyType,
        mainTitle,
        productName,
        modelName,
        size,
        weight,
        productIcon,
        iconContent1,
        productContent,
        warningContent,
        settingImage,
        settingTitle,
        settingContent,
        pointTitle,
        pointContent1,
        pointContent2,
        pointContent3,
        featureImage1,
        featureTitle1,
        featureSubTitle1,
        featureContent1,
        featureImage2,
        featureTitle2,
        featureSubTitle2,
        featureContent2,
        specName,
        specImage1,
        specImage2,
        specImage3,
        specDetailTitle1,
        specDetailContent1,
        specDetailImage1,
        specDetailTitle2,
        specDetailContent2,
        specDetailImage2,
        specDetailTitle3,
        specDetailContent3,
        specDetailImage3,
        finalTitle,
        finalContent,
        cerIconImage1,
        cerIconImage2,
        cerIconImage3,
        cerIconImage4,
        cerIconImage5,
        cerIconImage6,
        cerContent1,
        cerContent2,
        cerContent3,
        cerContent4,
        cerContent5,
        cerContent6,
        filePath1,
        fileOriginName1,
        filePath2,
        fileOriginName2,
        price,
        vipPrice1,
        vipPrice2,
        pointNumber1,
        pointNumber2,
        pointNumber3,
      } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Product.create({
          thumbnailPath,
          thumbnailPath2,
          productType,
          productSubType,
          keyType,
          mainTitle,
          productName,
          modelName,
          size,
          weight,
          productIcon,
          iconContent1,
          productContent,
          warningContent,
          settingImage,
          settingTitle,
          settingContent,
          pointTitle,
          pointContent1,
          pointContent2,
          pointContent3,
          featureImage1,
          featureTitle1,
          featureSubTitle1,
          featureContent1,
          featureImage2,
          featureTitle2,
          featureSubTitle2,
          featureContent2,
          specName,
          specImage1,
          specImage2,
          specImage3,
          specDetailTitle1,
          specDetailContent1,
          specDetailImage1,
          specDetailTitle2,
          specDetailContent2,
          specDetailImage2,
          specDetailTitle3,
          specDetailContent3,
          specDetailImage3,
          finalTitle,
          finalContent,
          cerIconImage1,
          cerIconImage2,
          cerIconImage3,
          cerIconImage4,
          cerIconImage5,
          cerIconImage6,
          cerContent1,
          cerContent2,
          cerContent3,
          cerContent4,
          cerContent5,
          cerContent6,
          filePath1,
          fileOriginName1,
          filePath2,
          fileOriginName2,
          createdAt: current,
          isDelete: false,
          price,
          vipPrice1,
          vipPrice2,
          pointNumber1,
          pointNumber2,
          pointNumber3,
        });

        const product = await Product.findOne({ _id: result._id });

        await Promise.all(
          colorImage.map(async (data, idx) => {
            product.colorImage.push(mongoose.Types.ObjectId(data));
          })
        );

        product.save();

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyProduct: async (_, args) => {
      const {
        id,
        thumbnailPath,
        thumbnailPath2,
        colorImage,
        productType,
        productSubType,
        keyType,
        mainTitle,
        productName,
        modelName,
        size,
        weight,
        productIcon,
        iconContent1,
        productContent,
        warningContent,
        settingImage,
        settingTitle,
        settingContent,
        pointTitle,
        pointContent1,
        pointContent2,
        pointContent3,
        featureImage1,
        featureTitle1,
        featureSubTitle1,
        featureContent1,
        featureImage2,
        featureTitle2,
        featureSubTitle2,
        featureContent2,
        specName,
        specImage1,
        specImage2,
        specImage3,
        specDetailTitle1,
        specDetailContent1,
        specDetailImage1,
        specDetailTitle2,
        specDetailContent2,
        specDetailImage2,
        specDetailTitle3,
        specDetailContent3,
        specDetailImage3,
        finalTitle,
        finalContent,
        cerIconImage1,
        cerIconImage2,
        cerIconImage3,
        cerIconImage4,
        cerIconImage5,
        cerIconImage6,
        cerContent1,
        cerContent2,
        cerContent3,
        cerContent4,
        cerContent5,
        cerContent6,
        filePath1,
        fileOriginName1,
        filePath2,
        fileOriginName2,
        price,
        vipPrice1,
        vipPrice2,
        pointNumber1,
        pointNumber2,
        pointNumber3,
      } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Product.updateOne(
          { _id: id },
          {
            $set: {
              thumbnailPath,
              thumbnailPath2,
              productType,
              productSubType,
              keyType,
              mainTitle,
              productName,
              modelName,
              size,
              weight,
              productIcon,
              iconContent1,
              productContent,
              warningContent,
              settingImage,
              settingTitle,
              settingContent,
              pointTitle,
              pointContent1,
              pointContent2,
              pointContent3,
              featureImage1,
              featureTitle1,
              featureSubTitle1,
              featureContent1,
              featureImage2,
              featureTitle2,
              featureSubTitle2,
              featureContent2,
              specName,
              specImage1,
              specImage2,
              specImage3,
              specDetailTitle1,
              specDetailContent1,
              specDetailImage1,
              specDetailTitle2,
              specDetailContent2,
              specDetailImage2,
              specDetailTitle3,
              specDetailContent3,
              specDetailImage3,
              finalTitle,
              finalContent,
              cerIconImage1,
              cerIconImage2,
              cerIconImage3,
              cerIconImage4,
              cerIconImage5,
              cerIconImage6,
              cerContent1,
              cerContent2,
              cerContent3,
              cerContent4,
              cerContent5,
              cerContent6,
              filePath1,
              fileOriginName1,
              filePath2,
              fileOriginName2,
              price,
              vipPrice1,
              vipPrice2,
              pointNumber1,
              pointNumber2,
              pointNumber3,
            },
          }
        );

        const product = await Product.findOne({ _id: id }).populate({
          path: `colorImage`,
          model: ColorImages,
        });

        if (colorImage.length !== 0) {
          product.colorImage = [];

          await Promise.all(
            colorImage.map(async (data, idx) => {
              product.colorImage.push(mongoose.Types.ObjectId(data));
            })
          );
        }
        product.save();

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteProduct: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Product.updateOne(
          { _id: id },
          {
            $set: {
              isDelete: true,
              deleteAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteColorImages: async (_, args) => {
      const { id, productId } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await ColorImages.deleteOne({ _id: id });

        const currentProduct = await Product.findOne({ _id: productId });

        currentProduct.colorImage = currentProduct.colorImage.filter(
          (data) => data._id.toString() !== id
        );

        currentProduct.save();

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateProductSort: async (_, args) => {
      const { id, sort } = args;

      try {
        const result = await Product.updateOne(
          { _id: id },
          {
            $set: {
              sort: parseInt(sort),
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
