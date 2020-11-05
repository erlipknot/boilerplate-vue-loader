let CLIENT = null;

export const zdState = {
  settings: null
};

export const zdActions = {
  init() {
    CLIENT = ZAFClient.init();
  },
  async setAppSettings() {
    const appSettings = await zdActions.zdEvents('app.registered');
    if (appSettings) zdState.settings = appSettings.metadata.settings;
  },
  async zdEvents(zdEvent) {
    return await CLIENT.on(zdEvent, async (data) => data);
  }
};