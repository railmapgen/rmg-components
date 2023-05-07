import { ComponentStyleConfig } from '@chakra-ui/theme';

// chakra components
import { inputTheme as Input } from './input';
import { sliderTheme as Slider } from './slider';
import { switchTheme as Switch } from './switch';

// rmg components
import { rmgAgGridTheme as RmgAgGrid } from './rmg-ag-grid';
import { rmgAppClipTheme as RmgAppClip } from './rmg-app-clip';
import { rmgCardTheme as RmgCard } from './rmg-card';
import { rmgDataTableTheme as RmgDataTable } from './rmg-data-table';
import { rmgEnrichedButtonTheme as RmgEnrichedButton } from './rmg-enriched-button';
import { rmgErrorBoundaryTheme as RmgErrorBoundary } from './rmg-error-boundary';
import { rmgLabelTheme as RmgLabel } from './rmg-label';
import { rmgLineBadgeTheme as RmgLineBadge } from './rmg-line-badge';
import { rmgLoaderTheme as RmgLoader } from './rmg-loader';
import { rmgMultiSelectTheme as RmgMultiSelect } from './rmg-multi-select';
import { rmgPageTheme as RmgPage } from './rmg-page';
import { rmgPageHeaderTheme as RmgPageHeader } from './rmg-page-header';
import { rmgSidePanelTheme as RmgSidePanel } from './rmg-side-panel';
import { rmgThrottledSliderTheme as RmgThrottledSlider } from './rmg-throttled-slider';
import { rmgWindowTheme as RmgWindow } from './rmg-window';
import { rmgWindowHeaderTheme as RmgWindowHeader } from './rmg-window-header';

export const components: Record<string, ComponentStyleConfig> = {
    Input,
    Checkbox: Switch,
    Select: Input,
    Slider,
    Switch,
    Textarea: Input,

    RmgAgGrid,
    RmgAppClip,
    RmgCard,
    RmgDataTable,
    RmgEnrichedButton,
    RmgErrorBoundary,
    RmgLabel,
    RmgLineBadge,
    RmgLoader,
    RmgMultiSelect,
    RmgPage,
    RmgPageHeader,
    RmgSidePanel,
    RmgThrottledSlider,
    RmgWindow,
    RmgWindowHeader,
};
