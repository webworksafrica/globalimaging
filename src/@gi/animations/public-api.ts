import { expandCollapse } from '@gi/animations/expand-collapse';
import { fadeIn, fadeInBottom, fadeInLeft, fadeInRight, fadeInTop, fadeOut, fadeOutBottom, fadeOutLeft, fadeOutRight, fadeOutTop } from '@gi/animations/fade';
import { shake } from '@gi/animations/shake';
import { slideInBottom, slideInLeft, slideInRight, slideInTop, slideOutBottom, slideOutLeft, slideOutRight, slideOutTop } from '@gi/animations/slide';
import { zoomIn, zoomOut } from '@gi/animations/zoom';

export const fuseAnimations = [
    expandCollapse,
    fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight,
    fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight,
    shake,
    slideInTop, slideInBottom, slideInLeft, slideInRight,
    slideOutTop, slideOutBottom, slideOutLeft, slideOutRight,
    zoomIn, zoomOut
];
