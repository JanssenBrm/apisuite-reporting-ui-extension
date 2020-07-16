import i18next from "i18next";
import { EXT_NAME } from "helpers/constants";
import enUS from "./en-US.json";
import ptPT from "./pt-PT.json";

i18next.addResourceBundle("en", EXT_NAME, enUS);
i18next.addResourceBundle("pt", EXT_NAME, ptPT);
