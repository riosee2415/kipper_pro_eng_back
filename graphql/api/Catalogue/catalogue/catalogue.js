import Catalogue from "../../../../../keeper-pro-kr-backEnd/graphql/models/Catalogue";

export default {
  Query: {
    getAllCatalogue: async (_, args) => {
      try {
        const result = await Catalogue.find({ isDelete: false });
        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },

    getCatalogueClient: async (_, args) => {
      const { searchValue, limit, currentPage } = args;

      try {
        const result = await Catalogue.find({
          title: { $regex: `.*${searchValue}.*` },
          isDelete: false,
        })

          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getCatalogueTotalPageClient: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await Catalogue.find({
          title: { $regex: `.*${searchValue}.*` },
          isDelete: false,
        });

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getCatalogueTotalPageOnlyCntClient: async (_, args) => {
      const { searchValue } = args;

      try {
        const result = await Catalogue.find({
          title: { $regex: `.*${searchValue}.*` },
          isDelete: false,
        });

        const cnt = result.length;

        return parseInt(cnt);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },
  Mutation: {
    createCatalogue: async (_, args) => {
      const { title, filePath, fileOriginName } = args;

      try {
        const result = await Catalogue.create({
          title,
          filePath,
          fileOriginName,
          isDelete: false,
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateCatalogue: async (_, args) => {
      const { id, title, filePath, fileOriginName } = args;

      try {
        const result = await Catalogue.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              title,
              filePath,
              fileOriginName,
            },
          }
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteCatalogue: async (_, args) => {
      const { id } = args;

      try {
        const result = await Catalogue.updateOne(
          { _id: id },
          {
            isDelete: true,
          }
        );

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
