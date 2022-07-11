import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import { DataProvider } from "@pankod/refine-strapi-v4";
import { useTranslation } from "react-i18next";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import 'index.css';
import { Layout } from "components/Layout";

import { ItemList } from "pages/items";
function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      routerProvider={routerProvider}
      // authProvider={authProvider}
      dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
      i18nProvider={i18nProvider}
      Layout={Layout}
      resources={[{ name: "items", list: ItemList}]}
    />
  );
}

export default App;
