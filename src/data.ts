export interface CropInfo {
  id: string;
  name: string;
  scientificName: string;
  category: "solanaceous" | "cucurbit" | "root-leaf" | "field-sweet";
  tagline: string;
  description: string;
  breedingFocus: string[];
  notableVarieties: string[];
  resistanceProfile: string;
  imageUrl: string;
  icon: string;
  soilOptima: string;
  averageMaturityDays: string;
}

export interface MetricCard {
  id: string;
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export interface RDEvaluationStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  scienceFocus: string;
  imageUrl: string;
}

export interface NewsArticle {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  views: number;
}

export interface BranchLocation {
  region: string;
  country: string;
  city: string;
  officeName: string;
  address: string;
  phone: string;
  email: string;
  mapEmbed: string;
}

export const CROPS_DATA: CropInfo[] = [
  {
    id: "tomato",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    category: "solanaceous",
    tagline: "Leading field and greenhouse tomato innovation globally",
    description: "HM.CLAUSE has a rich legacy of selection for fresh market and processing tomatoes. Our breeders focus heavily on yielding vigor, deep crimson internal color, exceptional flavor, and most critically, high resistance to structural viruses.",
    breedingFocus: [
      "ToBRFV (Tomato Brown Rugose Fruit Virus) Resistant Lines",
      "Superior Brix levels & high solid yield for industrial tomato paste",
      "Excellent post-harvest firmness, firmness retention, and extended shelf life (LSL)"
    ],
    notableVarieties: ["Sunsweet F1 Cherry", "Solaro Red", "Rugosa-Shield F1", "HMC-Processor 2026"],
    resistanceProfile: "High resistance to ToBRFV, TSWV, Fol 1-3, Vd, and Nematodes (Ma/Mi/Mj).",
    imageUrl: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800",
    icon: "Tomato",
    soilOptima: "Well-drained sandy loam, pH 6.0 - 6.8",
    averageMaturityDays: "70 - 85 days"
  },
  {
    id: "melon",
    name: "Melon",
    scientificName: "Cucumis melo",
    category: "cucurbit",
    tagline: "The global gold-standard in melon hybrid genetics",
    description: "As the undisputed global leader in melon breeding, our portfolio spans Charentais, Cantaloupe, Piel de Sapo, Galia, and Yellow Canary. We coordinate trials in all hemispheres to supply growers year-round.",
    breedingFocus: [
      "Flesh crunchiness & stable high sugar (Brix) accumulation",
      "Excellent skin netting structure to prevent pressure bruising during cargo travel",
      "Aromatics and shelf-life balance in the Charentais / Cantaloupe segments"
    ],
    notableVarieties: ["Claudio F1", "Galia Climber", "Saphir Golden", "Karman Orange Charentais"],
    resistanceProfile: "Intermediate to High resistance to Powdery Mildew (Px) and Melon Aphid (Ag).",
    imageUrl: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&q=80&w=800",
    icon: "Circle",
    soilOptima: "Rich loamy soils, excellent solar radiation, pH 6.2 - 7.2",
    averageMaturityDays: "75 - 90 days"
  },
  {
    id: "pepper",
    name: "Pepper",
    scientificName: "Capsicum annuum",
    category: "solanaceous",
    tagline: "Crunchy blocky bell peppers and high-value specialty peppers",
    description: "Our breeding yields sweet bell peppers, heavy-cropping Lamuyo peppers, and dynamic hot peppers. Built to withstand blistering summers and deliver glossy, uniform thick-walled fruits.",
    breedingFocus: [
      "Thick, crisp fruit walls that retain moisture and weights",
      "Dynamic color transition from dark green to intense yellow, orange, and deep red",
      "Low susceptibility to bacterial leaf spot and Phytophthora root rot"
    ],
    notableVarieties: ["Titan Blocky Red", "Lamuyo Dulce F1", "Golden Shield", "Habanero El Fuego"],
    resistanceProfile: "High resistance to PvY (Potato Virus Y), Tm:0-3, and bacterial spot races 1-10.",
    imageUrl: "https://images.unsplash.com/photo-1563565375-f3fdfdbedd83?auto=format&fit=crop&q=80&w=800",
    icon: "Apple",
    soilOptima: "Warm soil, deep porous silt-loam, pH 5.8 - 6.5",
    averageMaturityDays: "65 - 80 days"
  },
  {
    id: "squash",
    name: "Squash & Pumpkin",
    scientificName: "Cucurbita pepo",
    category: "cucurbit",
    tagline: "Unbeatable viral protection with high premium crop density",
    description: "Whether dark-green zucchini, yellow summer squash, gray zucchini, or rich baking pumpkins, HM.CLAUSE selection criteria ensure robust plants with open habits for easy physical harvesting.",
    breedingFocus: [
      "Erect, spine-free plant structures to reduce fruit scratches during harvest",
      "Multi-virus resistance stacks to preserve yield under intense pest pressure",
      "High cylindrical fruit uniformity with bright, shiny skin quality"
    ],
    notableVarieties: ["Zucchino Emerald", "Grey Gold F1", "Super-Kabucha", "Amber-Jack Pumpkin"],
    resistanceProfile: "High resistance to ZYMV (Zucchini Yellow Mosaic), WMV, and Powdery Mildew.",
    imageUrl: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=800",
    icon: "Shrub",
    soilOptima: "Humus-rich clay loam, well irrigated, pH 6.0 - 7.0",
    averageMaturityDays: "45 - 55 days"
  },
  {
    id: "cauliflower",
    name: "Cauliflower & Broccoli",
    scientificName: "Brassica oleracea var. botrytis",
    category: "root-leaf",
    tagline: "Perfect self-covering curd leaves with bright snow-white purity",
    description: "Cultivating snowy curds without solar yellowing is an agricultural craft. HM.CLAUSE’s self-wrapping leaf varieties envelop the curd securely, screening it from UV rays.",
    breedingFocus: [
      "Strong vertical wrapper leaves that snap tight over the curd",
      "Extremely dense curd weights with minimal risk of hollow stems",
      "Adaptable growth periods that survive sudden cold shifts or early hot snaps"
    ],
    notableVarieties: ["Snow-Dome F1", "Blizz-Shield White", "Verde-Romanesco F1"],
    resistanceProfile: "Excellent field tolerance to Downy Mildew, Hollow Stem, and curd purpling.",
    imageUrl: "https://images.unsplash.com/photo-1557405029-bb42ebd98fa2?auto=format&fit=crop&q=80&w=800",
    icon: "Sparkles",
    soilOptima: "Heavy clay-organic soil with stable moisture, pH 6.5 - 7.5",
    averageMaturityDays: "75 - 110 days"
  },
  {
    id: "carrot",
    name: "Carrot",
    scientificName: "Daucus carota",
    category: "root-leaf",
    tagline: "Crispy sweet roots designed for high-speed mechanical digging",
    description: "Our carrot varieties boast exceptional tensile strength in top foliage, enabling rapid mechanical harvesters to pull them without breaking. Deep internal coloring and sweet core profiles delight consumers.",
    breedingFocus: [
      "Foliage attachment strength and erect leaf habits",
      "Exceptional smoothness with minimal root tapering to maximize pack-out yield",
      "Sweet, crisp flavor profiles with high carotene content"
    ],
    notableVarieties: ["Nantes Gold F1", "Sweet-Cinch Carrot", "Imperator Pro"],
    resistanceProfile: "Intermediate resistance to Alternaria leaf blight, Cavity Spot, and Bolting.",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800",
    icon: "Leaf",
    soilOptima: "Deep, stone-free loose sandy soils, pH 5.5 - 6.5",
    averageMaturityDays: "95 - 120 days"
  },
  {
    id: "water_melon",
    name: "Watermelon",
    scientificName: "Citrullus lanatus",
    category: "cucurbit",
    tagline: "Crunchy, ultra-sweet seedless varieties with reliable yield",
    description: "HM.CLAUSE delivers seedless and seeded triploid watermelon hybrids with high sugar parameters, crisp texture, and resilient skin suitable for long distance freight.",
    breedingFocus: [
      "Consistent triploid seedless fruit set even under low spring temperatures",
      "Tiny seed-traces and brilliant red flesh with a crisp, non-mealy crunch",
      "Strong rind thickness to survive long-distance flatbed truck travel"
    ],
    notableVarieties: ["Crimson Shield", "Scarlet Seedless F1", "Mini-Delight Triploid"],
    resistanceProfile: "High resistance to Anthracnose (Co:1) and Fusarium Wilt (Fon:1).",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    icon: "Percent",
    soilOptima: "Sandy, fast-draining alluvial valleys, pH 6.0 - 6.8",
    averageMaturityDays: "80 - 95 days"
  },
  {
    id: "sweet_corn",
    name: "Sweet Corn & Beans",
    scientificName: "Zea mays / Phaseolus vulgaris",
    category: "field-sweet",
    tagline: "Outstanding tip fill, sugary kernels, and uniform high density",
    description: "Developed to preserve moisture and crunch after picking. Our sweet corn varieties and high-yielding bush beans are the pride of professional produce sections and growers alike.",
    breedingFocus: [
      "Superior kernel row alignment and perfect tip-fill with sh2 super-sweet genes",
      "Stalk lodging resistance to withstand violent high-wind summer storms",
      "Concentrated harvest window for machine harvester optimization"
    ],
    notableVarieties: ["Ambrosia-Gold Sh2", "Bi-Color Jewel F1", "Emerald-Max Bush Bean"],
    resistanceProfile: "High resistance to Common Rust (Ps), Northern Corn Leaf Blight (Et), and MDMV.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
    icon: "Wheat",
    soilOptima: "Fertile alluvial silts with high nitrogen, pH 6.0 - 7.0",
    averageMaturityDays: "72 - 82 days"
  }
];

export const STATS_DATA: MetricCard[] = [
  {
    id: "stat1",
    value: "100",
    suffix: "%",
    label: "Vegetable Seeds Dedicated",
    description: "Unlike generic crop developers, our attention is never split. We are 100% focused on breeding outstanding vegetable seed genetics."
  },
  {
    id: "stat2",
    value: "15",
    suffix: "%+",
    label: "Reinvested in R&D Annual Turnover",
    description: "One of the highest research investment ratios in the global industry. Innovation is the lifeblood of our agricultural progression."
  },
  {
    id: "stat3",
    value: "3000",
    suffix: "+",
    label: "Global Employees & Scientists",
    description: "A multicultural, highly trained network of plant physiologists, geneticists, field technicians, and local agronomic advisors."
  },
  {
    id: "stat4",
    value: "40",
    suffix: "",
    label: "State-of-the-Art Research Stations",
    description: "Strategic laboratories and test fields across every major climate zone to breed localized resilience."
  },
  {
    id: "stat5",
    value: "30",
    suffix: "+",
    label: "Countries with Commercial Presence",
    description: "Local partnerships on the ground ensure our hybrids are tailor-suited to localized soil, water quality, and consumer culinary preferences."
  }
];

export const RD_STEPS_DATA: RDEvaluationStep[] = [
  {
    step: 1,
    title: "Germplasm Collection & Phenotypic Biodiversity",
    subtitle: "Safeguarding ancestral botanical traits with deep diversity",
    description: "Cataloging and preserving thousands of wild crop strains to serve as our dynamic 'genetic crayon box' of natural resistance.",
    longDescription: "Our breeders start by querying our extensive seed vaults, sourcing stable historic crop lineages. Through tracking hundreds of natural markers, we locate genetic answers to drought resistance, intense heat tolerances, and historical soil pathogens.",
    scienceFocus: "Accessing diverse wild botanical strains without transgenic alterations (100% Non-GMO selection).",
    imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    step: 2,
    title: "High-Throughput Molecular Marker Mapping",
    subtitle: "Targeting beneficial genes with non-invasive molecular mapping",
    description: "Identifying strong survival traits down to the chromosome level to slash selection pipelines from 12 years to 4 years.",
    longDescription: "Using state-of-the-art genotyping arrays, we map down to individual base pairs. This DNA diagnostic allows our breeders to quickly verify if young seedlings have inherited vital resistances before they are ever planted in high-cost field trials.",
    scienceFocus: "Genomic sequence alignment, micro-array mapping, marker-assisted cross-pollination speedup.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    step: 3,
    title: "Rigorous Trials Across Latitude Extremes",
    subtitle: "Exposing plants to real-world pressure to breed true resilience",
    description: "Planting seed hybrid batches in arid deserts, tropical rainforest borders, and freezing mountain valleys globally.",
    longDescription: "A plant that looks gorgeous in a sterile climate-controlled greenhouse is useless if it shrivels in a dry dusty open field. Our 40 global research facilities test varieties against heavy wind loads, sand-burn, salinity spikes, and local root pest loads.",
    scienceFocus: "Phenomic data logging, UAV crop drone scanning, canopy temperature monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600"
  },
  {
    step: 4,
    title: "Eco-Friendly Physical Priming & Health Diagnostics",
    subtitle: "Fine-tuning seed vitality for clean, uniform germination",
    description: "Utilizing advanced oxygen-enrichment, heat therapy, and certified biological coatings to protect early sprouts.",
    longDescription: "Before any seed package is labeled with the HM.CLAUSE seal, it undergoes physical conditioning. We test germination percentages under cold water stress and high humidity-checking that up to 98% of seeds pop up concurrently to facilitate machine farming.",
    scienceFocus: "Seed respiration calorimetry, laser-sorting diagnostics, organic pelleting coatings.",
    imageUrl: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600"
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news1",
    tag: "PRODUCT INNOVATION",
    title: "Broadening the Rugosa Shield: Global Launch of New ToBRFV Resilient Tomato Hybrids",
    excerpt: " Growers across Western Europe and Central Mexico report remarkable success with our newly rolled-out deep crimson tomatoes, surviving severe Tomato Brown Rugose Fruit Virus outbreaks with zero yield decline.",
    date: "June 12, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600",
    views: 1420
  },
  {
    id: "news2",
    tag: "SUSTAINABILITY & CSR",
    title: "Empowering Smallholder Pepper Growers: HM.CLAUSE Digital Climatology Program",
    excerpt: "Adapting modern agricultural intelligence for family-owned smallholders in Southeast Asia and sub-Saharan Africa. We have distributed 85,000 hybrid seed packets alongside specialized climate-resilience training kits.",
    date: "May 28, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1563565375-f3fdfdbedd83?auto=format&fit=crop&q=80&w=600",
    views: 935
  },
  {
    id: "news3",
    tag: "EVENTS & FIELD DAYS",
    title: "HM.CLAUSE Global Virtual Field Days: Connecting 4,000 Growers Across 12 Timezones",
    excerpt: "With interactive 3D drone paths and physical sample dispatching, our digital exhibition allowed buyers to evaluate melon sugar indexes and rind density directly from their home offices.",
    date: "April 15, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    views: 2201
  }
];

export const BRAND_Heritage = {
  moranTitle: "HARRIS MORAN",
  moranSubtitle: "Pioneering vegetable seeds in the Americas since 1859",
  moranDescription: "Renowned for breeding tough, high-caliber crops in North and South American microclimates. Harris Moran has been the grower's partner in maximizing land productivity with intense disease protection packets and robust mechanical-harvest friendly structures.",
  clauseTitle: "CLAUSE",
  clauseSubtitle: "Unsurpassed gourmet French seed styling since 1785",
  clauseDescription: "The historic heart of European vegetable breeding. Founded in France, Clause refined the culinary profiles, high-sugar Brix, aromatic levels, and precise presentation of culinary vegetables-crafting varieties preferred by gourmet chefs and selective wholesalers alike.",
  combinedStatement: "In 2008, these two heavyweights fused under the Limagrain agricultural cooperative to create HM.CLAUSE—merging state-of-the-art North American testing volume with exquisite European culinary aesthetics."
};

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    region: "North America",
    country: "United States",
    city: "Davis, California",
    officeName: "HM.CLAUSE USA Headquarters & R&D Center",
    address: "260 J Street, Davis, CA 95616",
    phone: "+1 (530) 757-6500",
    email: "customer.service.usa@hmclause.com",
    mapEmbed: "Davis, California, USA"
  },
  {
    region: "Western Europe",
    country: "France",
    city: "Portes-lès-Valence",
    officeName: "HM.CLAUSE French Headquarters & Seed Processing Facility",
    address: "Rue Louis Saillant, 26800 Portes-lès-Valence",
    phone: "+33 (0)4 75 57 97 50",
    email: "contact.france@hmclause.com",
    mapEmbed: "Valence, France"
  },
  {
    region: "Western Europe",
    country: "Italy",
    city: "Venaria Reale, Torino",
    officeName: "HM.CLAUSE Italia S.R.L.",
    address: "Via della Venaria 83, 10148 Torino",
    phone: "+39 011 453 0090",
    email: "info.italy@hmclause.com",
    mapEmbed: "Torino, Italy"
  },
  {
    region: "Mediterranean",
    country: "Spain",
    city: "Almería",
    officeName: "Almería Breeding and Trial Center",
    address: "Carretera de San Almerimar, 04700 El Ejido",
    phone: "+34 950 48 90 30",
    email: "iberica.service@hmclause.com",
    mapEmbed: "Almeria, Spain"
  },
  {
    region: "South America",
    country: "Brazil",
    city: "Campinas, São Paulo",
    officeName: "HM.CLAUSE do Brasil Ltda.",
    address: "Av. José de Souza Campos, 1039, Campinas",
    phone: "+55 19 3705-2000",
    email: "vendas.brasil@hmclause.com",
    mapEmbed: "Campinas, Brazil"
  },
  {
    region: "Asia-Pacific",
    country: "Thailand",
    city: "Bangkok",
    officeName: "HM.CLAUSE Siam Research Station",
    address: "99/9 Ratchadapisek Rd, Din Daeng, Bangkok 10400",
    phone: "+66 2 248 1234",
    email: "service.asia@hmclause.com",
    mapEmbed: "Bangkok, Thailand"
  }
];
