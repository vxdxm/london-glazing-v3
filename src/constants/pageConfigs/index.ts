
import { homeConfig } from "./homeConfig";
import { 
  specializedConfig, 
  noiseReductionConfig, 
  acousticGlazingConfig, 
  glassOptionsConfig 
} from "./specializedConfigs";
import { 
  residentialConfig,
  sashWindowsConfig,
  casementWindowsConfig,
  bayWindowsConfig,
  horizontalSlidingConfig,
  liftOutConfig,
  combinationConfig,
  traditionalOptionsConfig,
  modernSolutionsConfig,
  energyPerformanceConfig,
  crittallWindowsConfig,
  singleDoubleGlazedConfig,
  fixedSecondaryGlazingConfig
} from "./residentialConfigs";
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
  sashWindows: sashWindowsConfig,
  casementWindows: casementWindowsConfig,
  bayWindows: bayWindowsConfig,
  horizontalSliding: horizontalSlidingConfig,
  liftOut: liftOutConfig,
  combination: combinationConfig,
  traditionalOptions: traditionalOptionsConfig,
  modernSolutions: modernSolutionsConfig,
  energyPerformance: energyPerformanceConfig,
  crittallWindows: crittallWindowsConfig,
  singleDoubleGlazed: singleDoubleGlazedConfig,
  fixedSecondaryGlazing: fixedSecondaryGlazingConfig,
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
  sashWindowsConfig,
  casementWindowsConfig,
  bayWindowsConfig,
  horizontalSlidingConfig,
  liftOutConfig,
  combinationConfig,
  traditionalOptionsConfig,
  modernSolutionsConfig,
  energyPerformanceConfig,
  crittallWindowsConfig,
  singleDoubleGlazedConfig,
  fixedSecondaryGlazingConfig,
  commercialConfig,
  officeBuildingsConfig
};
