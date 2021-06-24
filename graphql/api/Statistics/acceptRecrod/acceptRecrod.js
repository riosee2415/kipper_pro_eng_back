import AcceptRecord from "../../../models/AcceptRecord";

export default {
  Query: {
    getAcceptRecord: async (_, args) => {
      const {
        currentYear,
        searchIp,
        searchLocation,
        searchDevice,
        searchPlatform,
        searchBrowser,
      } = args;

      try {
        const result = await AcceptRecord.find({
          date: { $regex: `${currentYear}.*` },
          ipAdress: { $regex: `${searchIp}.*` },
          title: { $regex: `${searchLocation}.*` },
          device: { $regex: `${searchDevice}.*` },
          platform: { $regex: `${searchPlatform}.*` },
          browser: { $regex: `${searchBrowser}.*` },
        }).sort({ date: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAcceptRecordByMonth: async (_, args) => {
      const { currentMonth } = args;

      try {
        const result = await AcceptRecord.find({
          date: { $regex: `${currentMonth}.*` },
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAcceptRecordByDate: async (_, args) => {
      const { currentDate } = args;

      try {
        const result = await AcceptRecord.find({
          date: { $regex: `${currentDate}.*` },
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAcceptRecordByYesterday: async (_, args) => {
      const { currentYesterday } = args;

      try {
        const result = await AcceptRecord.find({
          date: { $regex: `${currentYesterday}.*` },
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getAcceptRecordAllYear: async (_, args) => {
      const { year } = args;

      try {
        const result = await AcceptRecord.find({
          date: { $regex: `${year}.*` },
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    addAcceptRecord: async (_, args) => {
      const { date, browser, platform, device, ipAdress, title, isVisit } =
        args;
      try {
        await AcceptRecord.create({
          date,
          browser,
          platform,
          device,
          ipAdress,
          title,
          isVisit,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
