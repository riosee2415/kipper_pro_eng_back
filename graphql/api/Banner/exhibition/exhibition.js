import Exhibition from "../../../../../keeper-pro-kr-backEnd/graphql/models/Exhibition";
import PFiles from "../../../../../keeper-pro-kr-backEnd/graphql/models/PFiles";
import ColorImages from "../../../../../keeper-pro-kr-backEnd/graphql/models/ColorImages";
import { CURRENT_TIME } from "../../../../../keeper-pro-kr-backEnd/utils/commonUtils";
import mongoose from "mongoose";

export default {
  Query: {
    getExhibition: async (_, args) => {
      const { searchName } = args;

      try {
        const result = await Exhibition.find({
          title: { $regex: `.*${searchName}.*` },
          isDelete: false,
        }).populate({
          path: `files`,
          model: PFiles,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getExhibitionAll: async (_, args) => {
      try {
        const result = await Exhibition.find({
          isDelete: false,
        }).populate({
          path: `files`,
          model: PFiles,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getExhibitionOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Exhibition.findOne({ _id: id }).populate({
          path: `files`,
          model: PFiles,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    modifyExhibition: async (_, args) => {
      const { id, title, thumbnail } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Exhibition.updateOne(
          { _id: id },
          {
            $set: {
              title: title,
              thumbnailPath: thumbnail,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    registerExhibition: async (_, args) => {
      const { thumbnailPath, title, innerImageList } = args;

      try {
        const result = await Exhibition.create({
          thumbnailPath,
          title,
          isDelete: false,
        });

        //result = 방금 생성된 상품의 정보
        //innerResult = 방금 생성된 파일의 정보

        await Promise.all(
          innerImageList.map(async (data, idx) => {
            const innerResult = await PFiles.create({
              filePath: data,
            });
            const saveId = mongoose.Types.ObjectId(innerResult._id);
            const exhibition = await Exhibition.findOne({ _id: result._id });

            if (exhibition === null) {
              console.log(
                "등록할 수 없습니다. 개발사에 문의해 주시기 바랍니다."
              );
              return;
            }

            exhibition.files.push(saveId);
            exhibition.save();
          })
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteExhibition: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Exhibition.updateOne(
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

    createColorImages: async (_, args) => {
      const { imagePath, color, colorCode, sort } = args;

      try {
        const restult = await ColorImages.create({
          imagePath,
          color,
          colorCode,
          sort,
        });

        return restult;
      } catch (error) {
        console.log(error);
        return {};
      }
    },
  },
};
