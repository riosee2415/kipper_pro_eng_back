import MainBanner from "../../../models/MainBanner";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getMainBanner: async (_, args) => {
      const { searchName } = args;

      try {
        const result = await MainBanner.find({
          title: { $regex: `.*${searchName}.*` },
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getMainBannerAll: async (_, args) => {
      try {
        const result = await MainBanner.find({
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getMainBannerOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await MainBanner.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    modifyMainBanner: async (_, args) => {
      const { id, title, link, desc, thumbnail } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MainBanner.updateOne(
          { _id: id },
          {
            $set: {
              title: title,
              link: link,
              thumbnailPath: thumbnail,
              description: desc,
              updatedAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    registerMainBanner: async (_, args) => {
      const { title, link, thumbnailPath, description } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MainBanner.create({
          title: title,
          link: link,
          thumbnailPath: thumbnailPath,
          description: description,
          isDelete: false,
          createdAt: current,
          updatedAt: current,
          deleteAt: "-",
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteMainBanner: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MainBanner.updateOne(
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
  },
};
