
import { homeConfig } from "./homeConfig";
import { 
  specializedConfig, 
  noiseReductionConfig, 
  acousticGlazingConfig, 
  glassOptionsConfig 
} from "./specializedConfigs";
import { residentialConfig } from "./residentialConfigs";
import { commercialConfig, officeBuildingsConfig } from "./commercialConfigs";
import { PageConfig } from "../pageConfigTypes";

// Export page configs in a consolidated object
export const PAGE_CONFIGS: Record<string, PageConfig> = {
  home: homeConfig,
  specialized: specializedConfig,
  noiseReduction: noiseReductionConfig,
  acousticGlazing: acousticGlazingConfig,
  glassOptions: glassOptionsConfig,
  residential: residentialConfig,
  commercial: commercialConfig,
  officeBuildings: officeBuildingsConfig
};

// Export individual configs for direct imports
export {
  homeConfig,
  specializedConfig,
  noiseReductionConfig,
  acousticGlazingConfig,
  glassOptionsConfig,
  residentialConfig,
  commercialConfig,
  officeBuildingsConfig
};
