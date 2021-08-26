import Reference from "../../../models/Reference";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getReference: async (_, args) => {
      const { searchName } = args;

      try {
        const result = await Reference.find({
          isDelete: false,
        }).sort({ title: -1 });

        let finalResult = result.filter((data) => {
          if (
            data.title
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchName.replace(/ /g, "").toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });

        return finalResult;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getReferenceAll: async (_, args) => {
      try {
        const result = await Reference.find({
          isDelete: false,
        }).sort({ title: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getReferenceOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Reference.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getReferenceClient: async (_, args) => {
      const { searchValue, limit, currentPage } = args;

      try {
        const result = await Reference.find({
          isDelete: false,
        });

        let finalResult = result.filter((data) => {
          if (
            data.title
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.subTitle
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.content
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });

        return finalResult.slice(
          currentPage * limit,
          currentPage * limit + limit
        );
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getReferenceTotalPageClient: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await Reference.find({
          isDelete: false,
        });

        let finalResult = result.filter((data) => {
          if (
            data.title
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.subTitle
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.content
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });

        const cnt = finalResult.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getReferenceTotalPageOnlyCntClient: async (_, args) => {
      const { searchValue } = args;

      try {
        const result = await Reference.find({
          isDelete: false,
        });

        let finalResult = result.filter((data) => {
          if (
            data.title
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.subTitle
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase()) ||
            data.content
              .replace(/ /g, "")
              .toLowerCase()
              .includes(searchValue.replace(/ /g, "").toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        });

        const cnt = finalResult.length;

        return parseInt(cnt);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },

  Mutation: {
    modifyReference: async (_, args) => {
      const {
        id,
        title,
        subTitle,
        thumbnail,
        filePath,
        fileOriginName,
        link,
        content,
      } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Reference.updateOne(
          { _id: id },
          {
            $set: {
              title,
              subTitle,
              thumbnailPath: thumbnail,
              filePath,
              fileOriginName,
              link,
              content,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    registerReference: async (_, args) => {
      const {
        title,
        subTitle,
        thumbnailPath,
        filePath,
        fileOriginName,
        link,
        content,
      } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Reference.create({
          title,
          subTitle,
          thumbnailPath: thumbnailPath,
          filePath,
          fileOriginName,
          link,
          content,
          isDelete: false,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteReference: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Reference.updateOne(
          { _id: id },
          {
            $set: {
              isDelete: true,
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
