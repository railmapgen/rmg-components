import { ComponentStyleConfig } from '@chakra-ui/theme';

// chakra components
import { inputTheme as Input } from './input';
import { sliderTheme as Slider } from './slider';
import { switchTheme as Switch } from './switch';

// rmg components
import { rmgAgGridTheme as RmgAgGrid } from './rmg-ag-grid';
import { rmgCardTheme as RmgCard } from './rmg-card';
import { rmgDataTableTheme as RmgDataTable } from './rmg-data-table';
import { rmgLabelTheme as RmgLabel } from './rmg-label';
import { rmgLineBadgeTheme as RmgLineBadge } from './rmg-line-badge';
import { rmgPageTheme as RmgPage } from './rmg-page';
import { rmgPageHeaderTheme as RmgPageHeader } from './rmg-page-header';
import { rmgSidePanelTheme as RmgSidePanel } from './rmg-side-panel';
import { rmgThrottledSliderTheme as RmgThrottledSlider } from './rmg-throttled-slider';
import { rmgWindowTheme as RmgWindow } from './rmg-window';
import { rmgWindowHeaderTheme as RmgWindowHeader } from './rmg-window-header';

export const components: Record<string, ComponentStyleConfig> = {
    Input,
    Select: Input,
    Slider,
    Switch,
    Textarea: Input,

    RmgAgGrid,
    RmgCard,
    RmgDataTable,
    RmgLabel,
    RmgLineBadge,
    RmgPage,
    RmgPageHeader,
    RmgSidePanel,
    RmgThrottledSlider,
    RmgWindow,
    RmgWindowHeader,
};
