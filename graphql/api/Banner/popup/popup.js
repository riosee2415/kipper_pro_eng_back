import Popup from "../../../models/Popup";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getPopup: async (_, args) => {
      const { searchName } = args;

      try {
        const result = await Popup.find({
          title: { $regex: `.*${searchName}.*` },
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getPopupAll: async (_, args) => {
      try {
        const result = await Popup.find({
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getPopupOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Popup.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    modifyPopup: async (_, args) => {
      const { id, title, thumbnail, link, onoff } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Popup.updateOne(
          { _id: id },
          {
            $set: {
              title: title,
              thumbnailPath: thumbnail,
              updatedAt: current,
              link: link,
              onoff: onoff,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    registerPopup: async (_, args) => {
      const { title, thumbnailPath, link } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Popup.create({
          title: title,
          link: link,
          thumbnailPath: thumbnailPath,
          isDelete: false,
          createdAt: current,
          updatedAt: current,
          deleteAt: "-",
          onoff: "OFF",
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deletePopup: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Popup.updateOne(
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
