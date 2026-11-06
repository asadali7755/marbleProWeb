// One trusted outside source per page, shown as a "Further reading" line.
// Every URL was checked to return 200 on 6 Nov 2026. Keyed by page path.

export interface ExternalRef { label: string; url: string; }

const wiki = (title: string, label = title.replace(/_/g, ' ')): ExternalRef => ({ label, url: `https://en.wikipedia.org/wiki/${title}` });

const MARBLE = wiki('Marble');
const CALCITE = wiki('Calcium_carbonate', 'Calcium carbonate');
const COUNTERTOP = wiki('Countertop');

export const EXTERNAL_REFS: Record<string, ExternalRef> = {
  '/services': MARBLE,
  '/locations': wiki('Emirates_of_the_United_Arab_Emirates', 'The seven emirates of the UAE'),
  '/gallery': wiki('Polishing'),
  '/blog': MARBLE,

  '/services/marble-polishing-dubai': MARBLE,
  '/services/marble-floor-restoration': MARBLE,
  '/services/marble-countertop-polishing': COUNTERTOP,
  '/services/terrazzo-polishing-dubai': wiki('Terrazzo'),
  '/services/granite-polishing': wiki('Granite'),
  '/services/quartz-polishing': wiki('Engineered_stone', 'Engineered stone (quartz)'),
  '/services/corian-countertop-polishing': wiki('Corian'),
  '/services/yellow-stain-removing': MARBLE,
  '/services/kitchen-top-polishing': COUNTERTOP,
  '/services/crystallization-sealing': CALCITE,
  '/services/travertine-polishing-dubai': wiki('Travertine'),
  '/services/onyx-marble-polishing-dubai': wiki('Onyx'),
  '/services/crema-marfil-polishing-dubai': MARBLE,
  '/services/calacatta-marble-polishing-dubai': wiki('Carrara_marble', 'Carrara marble, where Calacatta is quarried'),
  '/services/emperador-marble-polishing-dubai': MARBLE,
  '/services/floor-polishing-dubai': wiki('Polishing'),
  '/services/marble-scratch-repair-dubai': MARBLE,
  '/services/marble-grinding-dubai': wiki('Diamond_tool', 'Diamond tools'),
  '/services/commercial-floor-polishing-dubai': wiki('Polishing'),
  '/services/marble-cleaning-dubai': MARBLE,
  '/services/tile-polishing-dubai': wiki('Tile'),
  '/services/marble-stairs-polishing-dubai': MARBLE,
  '/services/marble-table-polishing-dubai': MARBLE,
  '/services/grout-joint-repair-dubai': wiki('Grout'),
  '/services/limestone-polishing-dubai': wiki('Limestone'),
  '/services/mosaic-floor-polishing-dubai': wiki('Mosaic'),

  '/locations/dubai': wiki('Dubai'),
  '/locations/abu-dhabi': wiki('Abu_Dhabi'),
  '/locations/sharjah': wiki('Sharjah'),
  '/locations/ajman': wiki('Ajman'),
  '/locations/ras-al-khaimah': wiki('Ras_Al_Khaimah'),
  '/locations/umm-al-quwain': wiki('Umm_Al_Quwain'),
  '/locations/fujairah': wiki('Fujairah'),
  '/locations/dibba': wiki('Dibba_Al-Fujairah', 'Dibba Al-Fujairah'),

  '/blog/marble-polishing-cost-dubai': MARBLE,
  '/blog/how-to-remove-yellow-stains-from-marble': MARBLE,
  '/blog/marble-vs-granite-uae-homes': wiki('Granite'),
  '/blog/how-often-polish-marble-floors-dubai': wiki('Polishing'),
  '/blog/marble-polishing-vs-crystallization': CALCITE,
  '/blog/how-to-care-for-marble-floors-uae': MARBLE,
  '/blog/travertine-vs-marble': wiki('Travertine'),
  '/blog/signs-marble-floor-needs-restoration': MARBLE,
  '/blog/bring-shine-marble-floors-dubai': CALCITE,
  '/blog/remove-dark-stains-marble-floor': MARBLE,
  '/blog/marble-floor-restoration-dubai': MARBLE,
  '/blog/onyx-marble-polishing-dubai': wiki('Onyx'),
  '/blog/corian-countertop-polishing-dubai': wiki('Corian'),
  '/blog/quartz-polishing-dubai': wiki('Engineered_stone', 'Engineered stone (quartz)'),
  '/blog/granite-polishing-dubai': wiki('Granite'),
  '/blog/terrazzo-polishing-dubai': wiki('Terrazzo'),
  '/blog/marble-polishing-dubai': MARBLE,
  '/blog/calacatta-marble-polishing-dubai': wiki('Carrara_marble', 'Carrara marble, where Calacatta is quarried'),
  '/blog/travertine-polishing-dubai': wiki('Travertine'),
  '/blog/marble-crystallization-sealing-dubai': CALCITE,
  '/blog/kitchen-top-polishing-dubai': COUNTERTOP,
  '/blog/yellow-stain-removing-marble-dubai': MARBLE,
  '/blog/marble-countertop-polishing-dubai': CALCITE,
  '/blog/emperador-marble-polishing-dubai': MARBLE,
  '/blog/crema-marfil-marble-polishing-dubai': MARBLE,
};
