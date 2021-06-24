import MobileMainBanner from "../../../models/MobileMainBanner";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getMobileMainBanner: async (_, args) => {
      const { searchName } = args;

      try {
        const result = await MobileMainBanner.find({
          title: { $regex: `.*${searchName}.*` },
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getMobileMainBannerAll: async (_, args) => {
      try {
        const result = await MobileMainBanner.find({
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getMobileMainBannerOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await MobileMainBanner.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    modifyMobileMainBanner: async (_, args) => {
      const { id, title, link, desc, thumbnail } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MobileMainBanner.updateOne(
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

    registerMobileMainBanner: async (_, args) => {
      const { title, link, thumbnailPath, description } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MobileMainBanner.create({
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

    deleteMobileMainBanner: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await MobileMainBanner.updateOne(
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
