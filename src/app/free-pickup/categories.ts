// 200 categories of items worth picking up for free donation/resale in Jacksonville, FL
// Original 100 categories: Electronics, Books, Jewelry, Collectibles, Musical Instruments, Tools, Sports
// Additional 100 categories: Appliances, Lawn Equipment, Outdoor Equipment, Power Tools, Small Vehicles
export const pickupCategories = [
  // Electronics (1-25)
  { slug: 'old-electronics', name: 'Old Electronics', description: 'Free pickup of old electronics in Jacksonville, Florida. Cell phones, tablets, computers, and more.', keywords: ['old electronics', 'used electronics', 'electronic devices', 'Jacksonville electronics pickup'] },
  { slug: 'smartphones', name: 'Smartphones', description: 'Free smartphone pickup in Jacksonville, Florida. All brands and models welcome for donation.', keywords: ['old smartphones', 'used phones', 'cell phones', 'iPhone', 'Android'] },
  { slug: 'laptops', name: 'Laptops', description: 'Free laptop pickup in Jacksonville, Florida. Working or broken laptops accepted for donation.', keywords: ['old laptops', 'used laptops', 'notebooks', 'computer laptops'] },
  { slug: 'tablets', name: 'Tablets', description: 'Free tablet pickup in Jacksonville, Florida. iPads, Android tablets, and e-readers accepted.', keywords: ['old tablets', 'used tablets', 'iPads', 'e-readers'] },
  { slug: 'digital-cameras', name: 'Digital Cameras', description: 'Free digital camera pickup in Jacksonville, Florida. DSLR, point-and-shoot, and video cameras.', keywords: ['old cameras', 'used cameras', 'DSLR cameras', 'photography equipment'] },
  { slug: 'gaming-consoles', name: 'Gaming Consoles', description: 'Free gaming console pickup in Jacksonville, Florida. PlayStation, Xbox, Nintendo systems and games.', keywords: ['old gaming consoles', 'video games', 'PlayStation', 'Xbox', 'Nintendo'] },
  { slug: 'tv-monitors', name: 'TVs & Monitors', description: 'Free TV and monitor pickup in Jacksonville, Florida. Flat screens, LCD, LED, and older models.', keywords: ['old TVs', 'used monitors', 'flat screen TVs', 'LCD monitors'] },
  { slug: 'audio-equipment', name: 'Audio Equipment', description: 'Free audio equipment pickup in Jacksonville, Florida. Speakers, headphones, stereos, and amplifiers.', keywords: ['old speakers', 'used audio', 'headphones', 'stereos', 'amplifiers'] },
  { slug: 'printers', name: 'Printers', description: 'Free printer pickup in Jacksonville, Florida. Inkjet, laser, and all-in-one printers accepted.', keywords: ['old printers', 'used printers', 'inkjet printers', 'laser printers'] },
  { slug: 'computer-accessories', name: 'Computer Accessories', description: 'Free computer accessories pickup in Jacksonville, Florida. Keyboards, mice, cables, and more.', keywords: ['computer accessories', 'keyboards', 'mice', 'computer cables'] },
  { slug: 'video-game-controllers', name: 'Video Game Controllers', description: 'Free video game controller pickup in Jacksonville, Florida. All gaming system controllers.', keywords: ['game controllers', 'video game accessories', 'gaming controllers'] },
  { slug: 'dvd-players', name: 'DVD & Blu-ray Players', description: 'Free DVD and Blu-ray player pickup in Jacksonville, Florida. All models and brands accepted.', keywords: ['old DVD players', 'Blu-ray players', 'media players'] },
  { slug: 'routers-modems', name: 'Routers & Modems', description: 'Free router and modem pickup in Jacksonville, Florida. Network equipment and WiFi routers.', keywords: ['old routers', 'used modems', 'network equipment', 'WiFi routers'] },
  { slug: 'smart-watches', name: 'Smart Watches', description: 'Free smart watch pickup in Jacksonville, Florida. Apple Watch, Fitbit, and fitness trackers.', keywords: ['old smart watches', 'fitness trackers', 'Apple Watch', 'Fitbit'] },
  { slug: 'headphones-earbuds', name: 'Headphones & Earbuds', description: 'Free headphone and earbud pickup in Jacksonville, Florida. All brands and models.', keywords: ['old headphones', 'used earbuds', 'wireless headphones', 'headphone accessories'] },
  { slug: 'smart-home-devices', name: 'Smart Home Devices', description: 'Free smart home device pickup in Jacksonville, Florida. Alexa, Google Home, smart lights, and more.', keywords: ['smart home devices', 'Alexa', 'Google Home', 'smart lights', 'home automation'] },
  { slug: 'calculators', name: 'Calculators', description: 'Free calculator pickup in Jacksonville, Florida. Scientific, graphing, and basic calculators.', keywords: ['old calculators', 'scientific calculators', 'graphing calculators'] },
  { slug: 'flash-drives', name: 'Flash Drives & Memory Cards', description: 'Free flash drive and memory card pickup in Jacksonville, Florida. USB drives and SD cards.', keywords: ['flash drives', 'USB drives', 'memory cards', 'SD cards', 'storage devices'] },
  { slug: 'cd-players', name: 'CD Players & Stereos', description: 'Free CD player and stereo pickup in Jacksonville, Florida. Boomboxes, portable players, and home stereos.', keywords: ['old CD players', 'stereos', 'boomboxes', 'portable audio'] },
  { slug: 'vhs-players', name: 'VHS Players & VCRs', description: 'Free VHS player pickup in Jacksonville, Florida. VCRs and VHS equipment for collectors.', keywords: ['old VCRs', 'VHS players', 'vintage video equipment'] },
  { slug: 'camcorders', name: 'Camcorders', description: 'Free camcorder pickup in Jacksonville, Florida. Digital and analog video cameras.', keywords: ['old camcorders', 'video cameras', 'handycams'] },
  { slug: 'projectors', name: 'Projectors', description: 'Free projector pickup in Jacksonville, Florida. Home theater and business projectors.', keywords: ['old projectors', 'home theater projectors', 'business projectors'] },
  { slug: 'scanners', name: 'Scanners', description: 'Free scanner pickup in Jacksonville, Florida. Document and photo scanners.', keywords: ['old scanners', 'document scanners', 'photo scanners'] },
  { slug: 'fax-machines', name: 'Fax Machines', description: 'Free fax machine pickup in Jacksonville, Florida. All types of fax machines.', keywords: ['old fax machines', 'used fax machines'] },
  { slug: 'cassette-players', name: 'Cassette Players', description: 'Free cassette player pickup in Jacksonville, Florida. Walkmans, boomboxes, and cassette decks.', keywords: ['old cassette players', 'Walkmans', 'cassette decks', 'vintage audio'] },

  // Books & Media (26-40)
  { slug: 'books', name: 'Books', description: 'Free book pickup in Jacksonville, Florida. Fiction, non-fiction, textbooks, and collectible books.', keywords: ['old books', 'used books', 'textbooks', 'collectible books', 'book donation'] },
  { slug: 'textbooks', name: 'Textbooks', description: 'Free textbook pickup in Jacksonville, Florida. College, high school, and educational books.', keywords: ['old textbooks', 'used textbooks', 'educational books', 'school books'] },
  { slug: 'comic-books', name: 'Comic Books', description: 'Free comic book pickup in Jacksonville, Florida. All comics and graphic novels.', keywords: ['old comics', 'comic books', 'graphic novels', 'collectible comics'] },
  { slug: 'dvds', name: 'DVDs', description: 'Free DVD pickup in Jacksonville, Florida. Movies, TV shows, and documentaries.', keywords: ['old DVDs', 'movie DVDs', 'used DVDs', 'DVD collection'] },
  { slug: 'blu-rays', name: 'Blu-rays', description: 'Free Blu-ray pickup in Jacksonville, Florida. Movies and TV shows on Blu-ray.', keywords: ['old Blu-rays', 'Blu-ray movies', 'used Blu-rays'] },
  { slug: 'video-games', name: 'Video Games', description: 'Free video game pickup in Jacksonville, Florida. All gaming systems and game titles.', keywords: ['old video games', 'used games', 'video game collection', 'gaming software'] },
  { slug: 'cds', name: 'CDs', description: 'Free CD pickup in Jacksonville, Florida. Music CDs, albums, and collections.', keywords: ['old CDs', 'music CDs', 'used CDs', 'CD collection'] },
  { slug: 'vinyl-records', name: 'Vinyl Records', description: 'Free vinyl record pickup in Jacksonville, Florida. LPs, 45s, and record collections.', keywords: ['old records', 'vinyl records', 'LPs', '45s', 'record collection'] },
  { slug: 'cassettes', name: 'Cassette Tapes', description: 'Free cassette tape pickup in Jacksonville, Florida. Music cassettes and collections.', keywords: ['old cassettes', 'cassette tapes', 'music cassettes'] },
  { slug: 'magazines', name: 'Magazines', description: 'Free magazine pickup in Jacksonville, Florida. Collectible and vintage magazines.', keywords: ['old magazines', 'vintage magazines', 'collectible magazines'] },
  { slug: 'maps', name: 'Maps', description: 'Free map pickup in Jacksonville, Florida. Old maps, atlases, and geographic materials.', keywords: ['old maps', 'vintage maps', 'atlases', 'geographic materials'] },
  { slug: 'sheet-music', name: 'Sheet Music', description: 'Free sheet music pickup in Jacksonville, Florida. Musical scores and songbooks.', keywords: ['old sheet music', 'musical scores', 'songbooks', 'music books'] },
  { slug: 'cookbooks', name: 'Cookbooks', description: 'Free cookbook pickup in Jacksonville, Florida. Recipe books and cooking guides.', keywords: ['old cookbooks', 'recipe books', 'cooking guides'] },
  { slug: 'encyclopedias', name: 'Encyclopedias', description: 'Free encyclopedia pickup in Jacksonville, Florida. Reference books and sets.', keywords: ['old encyclopedias', 'reference books', 'encyclopedia sets'] },
  { slug: 'children-books', name: 'Children\'s Books', description: 'Free children\'s book pickup in Jacksonville, Florida. Picture books and kids\' literature.', keywords: ['children books', 'kids books', 'picture books', 'children literature'] },

  // Jewelry & Accessories (41-50)
  { slug: 'jewelry', name: 'Jewelry', description: 'Free jewelry pickup in Jacksonville, Florida. All types of jewelry, costume and fine.', keywords: ['old jewelry', 'used jewelry', 'costume jewelry', 'fine jewelry'] },
  { slug: 'watches', name: 'Watches', description: 'Free watch pickup in Jacksonville, Florida. Vintage, luxury, and collectible watches.', keywords: ['old watches', 'vintage watches', 'luxury watches', 'collectible watches'] },
  { slug: 'sunglasses', name: 'Sunglasses', description: 'Free sunglass pickup in Jacksonville, Florida. Designer and branded sunglasses.', keywords: ['old sunglasses', 'designer sunglasses', 'used sunglasses'] },
  { slug: 'handbags', name: 'Handbags & Purses', description: 'Free handbag pickup in Jacksonville, Florida. Designer and vintage handbags.', keywords: ['old handbags', 'used purses', 'designer handbags', 'vintage handbags'] },
  { slug: 'wallets', name: 'Wallets', description: 'Free wallet pickup in Jacksonville, Florida. Leather wallets and designer accessories.', keywords: ['old wallets', 'leather wallets', 'designer wallets'] },
  { slug: 'belts', name: 'Belts', description: 'Free belt pickup in Jacksonville, Florida. Leather belts and designer accessories.', keywords: ['old belts', 'leather belts', 'designer belts'] },
  { slug: 'scarves', name: 'Scarves', description: 'Free scarf pickup in Jacksonville, Florida. Silk scarves and designer accessories.', keywords: ['old scarves', 'silk scarves', 'designer scarves'] },
  { slug: 'ties', name: 'Ties', description: 'Free tie pickup in Jacksonville, Florida. Silk ties and designer neckwear.', keywords: ['old ties', 'silk ties', 'designer ties', 'neckties'] },
  { slug: 'jewelry-boxes', name: 'Jewelry Boxes', description: 'Free jewelry box pickup in Jacksonville, Florida. Decorative and vintage jewelry storage.', keywords: ['old jewelry boxes', 'jewelry storage', 'vintage boxes'] },
  { slug: 'costume-jewelry', name: 'Costume Jewelry', description: 'Free costume jewelry pickup in Jacksonville, Florida. Vintage and collectible costume pieces.', keywords: ['costume jewelry', 'vintage jewelry', 'fashion jewelry'] },

  // Collectibles (51-70)
  { slug: 'coins', name: 'Coins', description: 'Free coin pickup in Jacksonville, Florida. Collectible coins, rare coins, and coin collections.', keywords: ['old coins', 'collectible coins', 'rare coins', 'coin collections'] },
  { slug: 'stamps', name: 'Stamps', description: 'Free stamp pickup in Jacksonville, Florida. Collectible stamps and stamp collections.', keywords: ['old stamps', 'collectible stamps', 'stamp collections', 'postage stamps'] },
  { slug: 'trading-cards', name: 'Trading Cards', description: 'Free trading card pickup in Jacksonville, Florida. Sports cards, Pokemon, Magic cards, and more.', keywords: ['trading cards', 'sports cards', 'Pokemon cards', 'baseball cards', 'Magic cards'] },
  { slug: 'action-figures', name: 'Action Figures', description: 'Free action figure pickup in Jacksonville, Florida. Vintage and collectible action figures.', keywords: ['old action figures', 'collectible toys', 'vintage toys', 'action figure collection'] },
  { slug: 'dolls', name: 'Dolls', description: 'Free doll pickup in Jacksonville, Florida. Collectible and vintage dolls.', keywords: ['old dolls', 'vintage dolls', 'collectible dolls', 'doll collection'] },
  { slug: 'model-cars', name: 'Model Cars', description: 'Free model car pickup in Jacksonville, Florida. Die-cast cars and model vehicles.', keywords: ['model cars', 'die-cast cars', 'toy cars', 'car models'] },
  { slug: 'sports-memorabilia', name: 'Sports Memorabilia', description: 'Free sports memorabilia pickup in Jacksonville, Florida. Autographed items and collectibles.', keywords: ['sports memorabilia', 'autographed items', 'sports collectibles', 'sports cards'] },
  { slug: 'postcards', name: 'Postcards', description: 'Free postcard pickup in Jacksonville, Florida. Vintage and collectible postcards.', keywords: ['old postcards', 'vintage postcards', 'collectible postcards'] },
  { slug: 'baseball-cards', name: 'Baseball Cards', description: 'Free baseball card pickup in Jacksonville, Florida. Collectible baseball cards and sets.', keywords: ['baseball cards', 'sports cards', 'collectible cards', 'baseball memorabilia'] },
  { slug: 'pokemon-cards', name: 'Pokemon Cards', description: 'Free Pokemon card pickup in Jacksonville, Florida. Trading cards and collections.', keywords: ['Pokemon cards', 'trading cards', 'collectible cards', 'Pokemon collection'] },
  { slug: 'magic-cards', name: 'Magic: The Gathering Cards', description: 'Free Magic card pickup in Jacksonville, Florida. Trading card game cards and collections.', keywords: ['Magic cards', 'MTG cards', 'trading cards', 'card game cards'] },
  { slug: 'vintage-toys', name: 'Vintage Toys', description: 'Free vintage toy pickup in Jacksonville, Florida. Collectible and rare toys.', keywords: ['vintage toys', 'old toys', 'collectible toys', 'rare toys'] },
  { slug: 'board-games', name: 'Board Games', description: 'Free board game pickup in Jacksonville, Florida. Classic and vintage board games.', keywords: ['old board games', 'vintage board games', 'classic games', 'used board games'] },
  { slug: 'puzzles', name: 'Puzzles', description: 'Free puzzle pickup in Jacksonville, Florida. Jigsaw puzzles and brain teasers.', keywords: ['old puzzles', 'jigsaw puzzles', 'used puzzles', 'puzzle games'] },
  { slug: 'model-railroad', name: 'Model Railroad', description: 'Free model railroad pickup in Jacksonville, Florida. Trains, tracks, and accessories.', keywords: ['model trains', 'model railroad', 'train sets', 'railroad models'] },
  { slug: 'slot-cars', name: 'Slot Cars', description: 'Free slot car pickup in Jacksonville, Florida. Racing sets and collectible cars.', keywords: ['slot cars', 'racing sets', 'toy cars', 'model racing'] },
  { slug: 'marbles', name: 'Marbles', description: 'Free marble pickup in Jacksonville, Florida. Collectible marbles and vintage toys.', keywords: ['old marbles', 'collectible marbles', 'vintage marbles'] },
  { slug: 'yo-yos', name: 'Yo-yos', description: 'Free yo-yo pickup in Jacksonville, Florida. Vintage and collectible yo-yos.', keywords: ['old yo-yos', 'vintage yo-yos', 'collectible toys'] },
  { slug: 'hot-wheels', name: 'Hot Wheels', description: 'Free Hot Wheels pickup in Jacksonville, Florida. Die-cast cars and collectibles.', keywords: ['Hot Wheels', 'die-cast cars', 'toy cars', 'collectible cars'] },
  { slug: 'star-wars-toys', name: 'Star Wars Toys', description: 'Free Star Wars toy pickup in Jacksonville, Florida. Action figures and collectibles.', keywords: ['Star Wars toys', 'action figures', 'collectible toys', 'vintage Star Wars'] },

  // Musical Instruments (71-80)
  { slug: 'musical-instruments', name: 'Musical Instruments', description: 'Free musical instrument pickup in Jacksonville, Florida. All types of instruments.', keywords: ['old instruments', 'used instruments', 'musical equipment', 'instrument donation'] },
  { slug: 'guitars', name: 'Guitars', description: 'Free guitar pickup in Jacksonville, Florida. Acoustic, electric, and bass guitars.', keywords: ['old guitars', 'used guitars', 'acoustic guitars', 'electric guitars'] },
  { slug: 'keyboards', name: 'Keyboards & Pianos', description: 'Free keyboard and piano pickup in Jacksonville, Florida. Digital pianos and keyboards.', keywords: ['old keyboards', 'used pianos', 'digital pianos', 'electronic keyboards'] },
  { slug: 'drums', name: 'Drums', description: 'Free drum pickup in Jacksonville, Florida. Drum sets and percussion instruments.', keywords: ['old drums', 'drum sets', 'percussion instruments', 'used drums'] },
  { slug: 'violins', name: 'Violins', description: 'Free violin pickup in Jacksonville, Florida. Violins, violas, and string instruments.', keywords: ['old violins', 'string instruments', 'violas', 'fiddles'] },
  { slug: 'brass-instruments', name: 'Brass Instruments', description: 'Free brass instrument pickup in Jacksonville, Florida. Trumpets, trombones, and horns.', keywords: ['brass instruments', 'trumpets', 'trombones', 'saxophones'] },
  { slug: 'woodwind-instruments', name: 'Woodwind Instruments', description: 'Free woodwind pickup in Jacksonville, Florida. Flutes, clarinets, and saxophones.', keywords: ['woodwind instruments', 'flutes', 'clarinets', 'saxophones'] },
  { slug: 'audio-recorders', name: 'Audio Recorders', description: 'Free audio recorder pickup in Jacksonville, Florida. Recording equipment and mixers.', keywords: ['audio recorders', 'recording equipment', 'mixers', 'audio interfaces'] },
  { slug: 'microphones', name: 'Microphones', description: 'Free microphone pickup in Jacksonville, Florida. Studio and performance microphones.', keywords: ['old microphones', 'used microphones', 'studio microphones', 'vocal mics'] },
  { slug: 'music-stands', name: 'Music Stands', description: 'Free music stand pickup in Jacksonville, Florida. Sheet music stands and accessories.', keywords: ['music stands', 'sheet music stands', 'instrument accessories'] },

  // Tools & Hardware (81-90)
  { slug: 'power-tools', name: 'Power Tools', description: 'Free power tool pickup in Jacksonville, Florida. Drills, saws, and workshop tools.', keywords: ['old power tools', 'used tools', 'drills', 'saws', 'workshop tools'] },
  { slug: 'hand-tools', name: 'Hand Tools', description: 'Free hand tool pickup in Jacksonville, Florida. Wrenches, screwdrivers, and tool sets.', keywords: ['old hand tools', 'wrenches', 'screwdrivers', 'tool sets', 'vintage tools'] },
  { slug: 'toolboxes', name: 'Toolboxes', description: 'Free toolbox pickup in Jacksonville, Florida. Metal and plastic tool storage.', keywords: ['old toolboxes', 'tool storage', 'tool chests'] },
  { slug: 'measuring-tools', name: 'Measuring Tools', description: 'Free measuring tool pickup in Jacksonville, Florida. Rulers, calipers, and measuring devices.', keywords: ['measuring tools', 'rulers', 'calipers', 'measuring devices'] },
  { slug: 'gardening-tools', name: 'Gardening Tools', description: 'Free gardening tool pickup in Jacksonville, Florida. Shovels, rakes, and garden equipment.', keywords: ['old gardening tools', 'shovels', 'rakes', 'garden equipment'] },
  { slug: 'wrenches', name: 'Wrenches', description: 'Free wrench pickup in Jacksonville, Florida. Socket sets and wrench collections.', keywords: ['old wrenches', 'socket sets', 'wrench sets', 'tool collections'] },
  { slug: 'screwdrivers', name: 'Screwdrivers', description: 'Free screwdriver pickup in Jacksonville, Florida. Screwdriver sets and collections.', keywords: ['old screwdrivers', 'screwdriver sets', 'tool collections'] },
  { slug: 'hammers', name: 'Hammers', description: 'Free hammer pickup in Jacksonville, Florida. Various types of hammers and mallets.', keywords: ['old hammers', 'tool collections', 'vintage tools'] },
  { slug: 'paintbrushes', name: 'Paintbrushes', description: 'Free paintbrush pickup in Jacksonville, Florida. Artist and house painting brushes.', keywords: ['old paintbrushes', 'artist brushes', 'painting supplies'] },
  { slug: 'tool-sets', name: 'Tool Sets', description: 'Free tool set pickup in Jacksonville, Florida. Complete tool sets and collections.', keywords: ['old tool sets', 'complete tool sets', 'tool collections'] },

  // Sports & Recreation (91-100)
  { slug: 'sports-equipment', name: 'Sports Equipment', description: 'Free sports equipment pickup in Jacksonville, Florida. All types of athletic gear.', keywords: ['old sports equipment', 'used sports gear', 'athletic equipment', 'sports donation'] },
  { slug: 'golf-clubs', name: 'Golf Clubs', description: 'Free golf club pickup in Jacksonville, Florida. Complete sets and individual clubs.', keywords: ['old golf clubs', 'used golf clubs', 'golf equipment', 'golf sets'] },
  { slug: 'tennis-rackets', name: 'Tennis Rackets', description: 'Free tennis racket pickup in Jacksonville, Florida. Rackets and tennis equipment.', keywords: ['old tennis rackets', 'used rackets', 'tennis equipment'] },
  { slug: 'bicycles', name: 'Bicycles', description: 'Free bicycle pickup in Jacksonville, Florida. All types of bikes and cycling accessories.', keywords: ['old bicycles', 'used bikes', 'bike donation', 'cycling equipment'] },
  { slug: 'camping-gear', name: 'Camping Gear', description: 'Free camping equipment pickup in Jacksonville, Florida. Tents, sleeping bags, and outdoor gear.', keywords: ['old camping gear', 'used tents', 'sleeping bags', 'outdoor equipment'] },
  { slug: 'fishing-tackle', name: 'Fishing Tackle', description: 'Free fishing tackle pickup in Jacksonville, Florida. Rods, reels, and fishing equipment.', keywords: ['old fishing tackle', 'fishing rods', 'fishing reels', 'fishing equipment'] },
  { slug: 'exercise-equipment', name: 'Exercise Equipment', description: 'Free exercise equipment pickup in Jacksonville, Florida. Weights, treadmills, and fitness gear.', keywords: ['old exercise equipment', 'used weights', 'fitness equipment', 'exercise machines'] },
  { slug: 'skateboards', name: 'Skateboards', description: 'Free skateboard pickup in Jacksonville, Florida. Complete boards and skateboard accessories.', keywords: ['old skateboards', 'used skateboards', 'skateboard equipment'] },
  { slug: 'hockey-equipment', name: 'Hockey Equipment', description: 'Free hockey equipment pickup in Jacksonville, Florida. Sticks, pads, and hockey gear.', keywords: ['old hockey equipment', 'hockey sticks', 'hockey pads', 'hockey gear'] },
  { slug: 'baseball-equipment', name: 'Baseball Equipment', description: 'Free baseball equipment pickup in Jacksonville, Florida. Bats, gloves, and baseball gear.', keywords: ['old baseball equipment', 'baseball bats', 'baseball gloves', 'baseball gear'] },

  // Appliances (101-120)
  { slug: 'washing-machines', name: 'Washing Machines', description: 'Free washing machine pickup in Jacksonville, Florida. Working or non-working washers accepted.', keywords: ['old washers', 'used washing machines', 'washer donation', 'clothes washers'] },
  { slug: 'dryers', name: 'Dryers', description: 'Free dryer pickup in Jacksonville, Florida. Electric and gas dryers accepted.', keywords: ['old dryers', 'used dryers', 'clothes dryers', 'dryer donation'] },
  { slug: 'washer-dryer-sets', name: 'Washer & Dryer Sets', description: 'Free washer and dryer set pickup in Jacksonville, Florida. Matching pairs preferred.', keywords: ['washer dryer sets', 'laundry sets', 'appliance pairs'] },
  { slug: 'refrigerators', name: 'Refrigerators', description: 'Free refrigerator pickup in Jacksonville, Florida. Full-size and compact fridges accepted.', keywords: ['old refrigerators', 'used fridges', 'refrigerator donation', 'freezers'] },
  { slug: 'stoves-ovens', name: 'Stoves & Ovens', description: 'Free stove and oven pickup in Jacksonville, Florida. Gas and electric ranges accepted.', keywords: ['old stoves', 'used ovens', 'ranges', 'cooking appliances'] },
  { slug: 'dishwashers', name: 'Dishwashers', description: 'Free dishwasher pickup in Jacksonville, Florida. Built-in and portable dishwashers.', keywords: ['old dishwashers', 'used dishwashers', 'dishwasher donation'] },
  { slug: 'microwaves', name: 'Microwaves', description: 'Free microwave pickup in Jacksonville, Florida. Countertop and built-in microwaves.', keywords: ['old microwaves', 'used microwaves', 'microwave donation'] },
  { slug: 'freezers', name: 'Freezers', description: 'Free freezer pickup in Jacksonville, Florida. Upright and chest freezers accepted.', keywords: ['old freezers', 'used freezers', 'deep freezers', 'chest freezers'] },
  { slug: 'range-hoods', name: 'Range Hoods', description: 'Free range hood pickup in Jacksonville, Florida. Vent hoods and exhaust fans.', keywords: ['old range hoods', 'vent hoods', 'exhaust fans'] },
  { slug: 'garbage-disposals', name: 'Garbage Disposals', description: 'Free garbage disposal pickup in Jacksonville, Florida. All brands and models.', keywords: ['old garbage disposals', 'kitchen disposals', 'waste disposals'] },
  { slug: 'dehumidifiers', name: 'Dehumidifiers', description: 'Free dehumidifier pickup in Jacksonville, Florida. Portable and whole-house units.', keywords: ['old dehumidifiers', 'used dehumidifiers', 'humidity control'] },
  { slug: 'air-conditioners', name: 'Air Conditioners', description: 'Free air conditioner pickup in Jacksonville, Florida. Window units and portable ACs.', keywords: ['old air conditioners', 'used AC units', 'window AC units', 'portable ACs'] },
  { slug: 'water-heaters', name: 'Water Heaters', description: 'Free water heater pickup in Jacksonville, Florida. Tank and tankless water heaters.', keywords: ['old water heaters', 'used water heaters', 'hot water tanks'] },
  { slug: 'dishwasher-parts', name: 'Dishwasher Parts', description: 'Free dishwasher parts pickup in Jacksonville, Florida. Motors, pumps, and components.', keywords: ['dishwasher parts', 'appliance parts', 'repair parts'] },
  { slug: 'washer-parts', name: 'Washer Parts', description: 'Free washer parts pickup in Jacksonville, Florida. Motors, pumps, and repair components.', keywords: ['washer parts', 'washing machine parts', 'repair components'] },
  { slug: 'dryer-parts', name: 'Dryer Parts', description: 'Free dryer parts pickup in Jacksonville, Florida. Heating elements, belts, and components.', keywords: ['dryer parts', 'dryer components', 'repair parts'] },
  { slug: 'refrigerator-parts', name: 'Refrigerator Parts', description: 'Free refrigerator parts pickup in Jacksonville, Florida. Compressors, coils, and components.', keywords: ['refrigerator parts', 'fridge parts', 'appliance components'] },
  { slug: 'small-appliances', name: 'Small Appliances', description: 'Free small appliance pickup in Jacksonville, Florida. Toasters, blenders, coffee makers, and more.', keywords: ['small appliances', 'kitchen appliances', 'countertop appliances'] },
  { slug: 'vacuum-cleaners', name: 'Vacuum Cleaners', description: 'Free vacuum cleaner pickup in Jacksonville, Florida. Upright, canister, and handheld vacuums.', keywords: ['old vacuums', 'used vacuum cleaners', 'vacuum donation'] },
  { slug: 'appliance-scrap', name: 'Appliance Scrap', description: 'Free appliance scrap pickup in Jacksonville, Florida. Broken appliances for parts or recycling.', keywords: ['appliance scrap', 'broken appliances', 'scrap metal', 'appliance recycling'] },

  // Lawn & Garden Equipment (121-145)
  { slug: 'lawn-mowers', name: 'Lawn Mowers', description: 'Free lawn mower pickup in Jacksonville, Florida. Push mowers, riding mowers, and zero-turn mowers.', keywords: ['old lawn mowers', 'used mowers', 'riding mowers', 'push mowers'] },
  { slug: 'weed-eaters', name: 'Weed Eaters & String Trimmers', description: 'Free weed eater pickup in Jacksonville, Florida. Gas and electric trimmers.', keywords: ['old weed eaters', 'string trimmers', 'grass trimmers', 'weed whackers'] },
  { slug: 'leaf-blowers', name: 'Leaf Blowers', description: 'Free leaf blower pickup in Jacksonville, Florida. Gas, electric, and battery-powered blowers.', keywords: ['old leaf blowers', 'used blowers', 'garden blowers'] },
  { slug: 'chainsaws', name: 'Chainsaws', description: 'Free chainsaw pickup in Jacksonville, Florida. Gas and electric chainsaws.', keywords: ['old chainsaws', 'used chainsaws', 'saw chains'] },
  { slug: 'hedge-trimmers', name: 'Hedge Trimmers', description: 'Free hedge trimmer pickup in Jacksonville, Florida. Electric and gas hedge trimmers.', keywords: ['old hedge trimmers', 'used trimmers', 'garden trimmers'] },
  { slug: 'tillers', name: 'Tillers & Cultivators', description: 'Free tiller pickup in Jacksonville, Florida. Gas and electric garden tillers.', keywords: ['old tillers', 'garden tillers', 'cultivators', 'soil tillers'] },
  { slug: 'edgers', name: 'Lawn Edgers', description: 'Free lawn edger pickup in Jacksonville, Florida. Electric and gas edgers.', keywords: ['old edgers', 'lawn edgers', 'yard edgers'] },
  { slug: 'snow-blowers', name: 'Snow Blowers', description: 'Free snow blower pickup in Jacksonville, Florida. Single-stage and two-stage snow blowers.', keywords: ['old snow blowers', 'used snow blowers', 'snow throwers'] },
  { slug: 'lawn-tractors', name: 'Lawn Tractors', description: 'Free lawn tractor pickup in Jacksonville, Florida. Riding mowers and garden tractors.', keywords: ['old lawn tractors', 'riding mowers', 'garden tractors'] },
  { slug: 'push-mowers', name: 'Push Mowers', description: 'Free push mower pickup in Jacksonville, Florida. Manual and self-propelled mowers.', keywords: ['old push mowers', 'manual mowers', 'walk-behind mowers'] },
  { slug: 'garden-carts', name: 'Garden Carts & Wheelbarrows', description: 'Free garden cart pickup in Jacksonville, Florida. Wheelbarrows and yard carts.', keywords: ['old wheelbarrows', 'garden carts', 'yard carts', 'garden wagons'] },
  { slug: 'sprinklers', name: 'Sprinklers & Irrigation', description: 'Free sprinkler pickup in Jacksonville, Florida. Lawn sprinklers and irrigation systems.', keywords: ['old sprinklers', 'lawn sprinklers', 'irrigation equipment', 'garden sprinklers'] },
  { slug: 'hoses', name: 'Garden Hoses', description: 'Free garden hose pickup in Jacksonville, Florida. All lengths and types of hoses.', keywords: ['old garden hoses', 'used hoses', 'water hoses'] },
  { slug: 'lawn-equipment-parts', name: 'Lawn Equipment Parts', description: 'Free lawn equipment parts pickup in Jacksonville, Florida. Mower parts, blades, and components.', keywords: ['mower parts', 'lawn equipment parts', 'repair parts'] },
  { slug: 'pressure-washers', name: 'Pressure Washers', description: 'Free pressure washer pickup in Jacksonville, Florida. Gas and electric pressure washers.', keywords: ['old pressure washers', 'used pressure washers', 'power washers'] },
  { slug: 'lawn-equipment-scrap', name: 'Lawn Equipment Scrap', description: 'Free lawn equipment scrap pickup in Jacksonville, Florida. Broken mowers and equipment for parts.', keywords: ['lawn equipment scrap', 'broken mowers', 'equipment scrap', 'mower scrap'] },
  { slug: 'spreaders', name: 'Fertilizer Spreaders', description: 'Free spreader pickup in Jacksonville, Florida. Broadcast and drop spreaders.', keywords: ['old spreaders', 'fertilizer spreaders', 'seed spreaders'] },
  { slug: 'aerate-rs', name: 'Aerators', description: 'Free aerator pickup in Jacksonville, Florida. Manual and powered lawn aerators.', keywords: ['old aerators', 'lawn aerators', 'yard aerators'] },
  { slug: 'pruners', name: 'Pruners & Loppers', description: 'Free pruner pickup in Jacksonville, Florida. Hand pruners and lopping shears.', keywords: ['old pruners', 'garden pruners', 'loppers', 'pruning tools'] },
  { slug: 'shovels-rakes', name: 'Shovels & Rakes', description: 'Free shovel and rake pickup in Jacksonville, Florida. All types of garden tools.', keywords: ['old shovels', 'garden rakes', 'yard tools', 'digging tools'] },
  { slug: 'garden-tools', name: 'Garden Tools', description: 'Free garden tool pickup in Jacksonville, Florida. Trowels, hoes, and hand tools.', keywords: ['old garden tools', 'garden hand tools', 'yard tools'] },
  { slug: 'planters', name: 'Planters & Pots', description: 'Free planter pickup in Jacksonville, Florida. Flower pots and plant containers.', keywords: ['old planters', 'flower pots', 'garden containers', 'plant pots'] },
  { slug: 'greenhouses', name: 'Greenhouses', description: 'Free greenhouse pickup in Jacksonville, Florida. Small and portable greenhouses.', keywords: ['old greenhouses', 'garden greenhouses', 'grow houses'] },
  { slug: 'compost-bins', name: 'Compost Bins', description: 'Free compost bin pickup in Jacksonville, Florida. Composting systems and bins.', keywords: ['old compost bins', 'composting equipment', 'compost tumblers'] },
  { slug: 'watering-cans', name: 'Watering Cans', description: 'Free watering can pickup in Jacksonville, Florida. All sizes of watering cans.', keywords: ['old watering cans', 'garden watering cans'] },

  // Outdoor Equipment & Recreation (146-165)
  { slug: 'grills', name: 'Grills & BBQ Equipment', description: 'Free grill pickup in Jacksonville, Florida. Gas, charcoal, and electric grills.', keywords: ['old grills', 'used grills', 'BBQ grills', 'charcoal grills'] },
  { slug: 'patio-furniture', name: 'Patio Furniture', description: 'Free patio furniture pickup in Jacksonville, Florida. Outdoor tables, chairs, and sets.', keywords: ['old patio furniture', 'outdoor furniture', 'garden furniture', 'deck furniture'] },
  { slug: 'umbrellas', name: 'Patio Umbrellas', description: 'Free patio umbrella pickup in Jacksonville, Florida. Market umbrellas and cantilevers.', keywords: ['old umbrellas', 'patio umbrellas', 'outdoor umbrellas'] },
  { slug: 'fire-pits', name: 'Fire Pits', description: 'Free fire pit pickup in Jacksonville, Florida. Portable and permanent fire pits.', keywords: ['old fire pits', 'outdoor fire pits', 'fire bowls'] },
  { slug: 'outdoor-heaters', name: 'Outdoor Heaters', description: 'Free outdoor heater pickup in Jacksonville, Florida. Patio heaters and propane heaters.', keywords: ['old outdoor heaters', 'patio heaters', 'propane heaters'] },
  { slug: 'pools', name: 'Pools & Hot Tubs', description: 'Free pool and hot tub pickup in Jacksonville, Florida. Above-ground pools and hot tubs.', keywords: ['old pools', 'above-ground pools', 'hot tubs', 'spas'] },
  { slug: 'pool-equipment', name: 'Pool Equipment', description: 'Free pool equipment pickup in Jacksonville, Florida. Pumps, filters, and pool accessories.', keywords: ['old pool equipment', 'pool pumps', 'pool filters', 'pool accessories'] },
  { slug: 'trampolines', name: 'Trampolines', description: 'Free trampoline pickup in Jacksonville, Florida. All sizes of trampolines.', keywords: ['old trampolines', 'used trampolines', 'outdoor trampolines'] },
  { slug: 'playground-equipment', name: 'Playground Equipment', description: 'Free playground equipment pickup in Jacksonville, Florida. Swings, slides, and play sets.', keywords: ['old playground equipment', 'swing sets', 'playground sets', 'outdoor toys'] },
  { slug: 'basketball-hoops', name: 'Basketball Hoops', description: 'Free basketball hoop pickup in Jacksonville, Florida. Portable and in-ground hoops.', keywords: ['old basketball hoops', 'used hoops', 'basketball goals'] },
  { slug: 'outdoor-storage', name: 'Outdoor Storage', description: 'Free outdoor storage pickup in Jacksonville, Florida. Sheds and storage boxes.', keywords: ['old storage sheds', 'outdoor storage', 'garden sheds'] },
  { slug: 'decorative-items', name: 'Outdoor Decorative Items', description: 'Free outdoor decor pickup in Jacksonville, Florida. Statues, fountains, and yard art.', keywords: ['outdoor decor', 'garden statues', 'yard art', 'outdoor fountains'] },
  { slug: 'hammocks', name: 'Hammocks', description: 'Free hammock pickup in Jacksonville, Florida. Rope and fabric hammocks.', keywords: ['old hammocks', 'outdoor hammocks', 'garden hammocks'] },
  { slug: 'outdoor-lighting', name: 'Outdoor Lighting', description: 'Free outdoor lighting pickup in Jacksonville, Florida. Solar lights and landscape lighting.', keywords: ['old outdoor lights', 'solar lights', 'landscape lighting', 'garden lights'] },
  { slug: 'fencing', name: 'Fencing Materials', description: 'Free fencing material pickup in Jacksonville, Florida. Chain link, wood, and metal fencing.', keywords: ['old fencing', 'fence materials', 'chain link fence', 'wood fence'] },
  { slug: 'pavers', name: 'Pavers & Stones', description: 'Free paver pickup in Jacksonville, Florida. Bricks, stones, and paving materials.', keywords: ['old pavers', 'bricks', 'paving stones', 'landscape stones'] },
  { slug: 'garden-statues', name: 'Garden Statues', description: 'Free garden statue pickup in Jacksonville, Florida. Decorative yard statues and ornaments.', keywords: ['old garden statues', 'yard ornaments', 'garden decor', 'outdoor statues'] },
  { slug: 'bird-baths', name: 'Bird Baths', description: 'Free bird bath pickup in Jacksonville, Florida. All styles of bird baths.', keywords: ['old bird baths', 'garden bird baths', 'outdoor bird baths'] },
  { slug: 'garden-benches', name: 'Garden Benches', description: 'Free garden bench pickup in Jacksonville, Florida. Outdoor benches and seating.', keywords: ['old garden benches', 'outdoor benches', 'garden seating'] },
  { slug: 'tree-stumps', name: 'Tree Stumps', description: 'Free tree stump pickup in Jacksonville, Florida. Stumps for removal or repurposing.', keywords: ['tree stumps', 'stump removal', 'wood stumps'] },

  // Power Tools & Workshop Equipment (166-185)
  { slug: 'table-saws', name: 'Table Saws', description: 'Free table saw pickup in Jacksonville, Florida. Portable and stationary table saws.', keywords: ['old table saws', 'used table saws', 'workshop saws'] },
  { slug: 'circular-saws', name: 'Circular Saws', description: 'Free circular saw pickup in Jacksonville, Florida. All brands and sizes.', keywords: ['old circular saws', 'used saws', 'cutting tools'] },
  { slug: 'miter-saws', name: 'Miter Saws', description: 'Free miter saw pickup in Jacksonville, Florida. Compound and sliding miter saws.', keywords: ['old miter saws', 'chop saws', 'cutting saws'] },
  { slug: 'jigsaws', name: 'Jigsaws', description: 'Free jigsaw pickup in Jacksonville, Florida. Electric and cordless jigsaws.', keywords: ['old jigsaws', 'saber saws', 'cutting tools'] },
  { slug: 'drill-presses', name: 'Drill Presses', description: 'Free drill press pickup in Jacksonville, Florida. Bench-top and floor models.', keywords: ['old drill presses', 'workshop equipment', 'drilling tools'] },
  { slug: 'bench-grinders', name: 'Bench Grinders', description: 'Free bench grinder pickup in Jacksonville, Florida. Sharpening and grinding tools.', keywords: ['old bench grinders', 'grinding tools', 'sharpening tools'] },
  { slug: 'sanders', name: 'Sanders', description: 'Free sander pickup in Jacksonville, Florida. Belt, orbital, and palm sanders.', keywords: ['old sanders', 'belt sanders', 'orbital sanders', 'sanding tools'] },
  { slug: 'routers', name: 'Routers', description: 'Free router pickup in Jacksonville, Florida. Fixed-base and plunge routers.', keywords: ['old routers', 'wood routers', 'routing tools'] },
  { slug: 'nail-guns', name: 'Nail Guns', description: 'Free nail gun pickup in Jacksonville, Florida. Pneumatic and electric nailers.', keywords: ['old nail guns', 'nailers', 'fastening tools'] },
  { slug: 'air-compressors', name: 'Air Compressors', description: 'Free air compressor pickup in Jacksonville, Florida. Portable and stationary compressors.', keywords: ['old air compressors', 'compressors', 'pneumatic tools'] },
  { slug: 'generators', name: 'Generators', description: 'Free generator pickup in Jacksonville, Florida. Portable and standby generators.', keywords: ['old generators', 'used generators', 'power generators', 'backup generators'] },
  { slug: 'welders', name: 'Welders', description: 'Free welder pickup in Jacksonville, Florida. Arc, MIG, and TIG welders.', keywords: ['old welders', 'welding equipment', 'welding machines'] },
  { slug: 'tool-storage', name: 'Tool Storage', description: 'Free tool storage pickup in Jacksonville, Florida. Tool chests and cabinets.', keywords: ['old tool chests', 'tool cabinets', 'workshop storage'] },
  { slug: 'workbenches', name: 'Workbenches', description: 'Free workbench pickup in Jacksonville, Florida. Wood and metal workbenches.', keywords: ['old workbenches', 'workshop benches', 'work tables'] },
  { slug: 'vises', name: 'Vises', description: 'Free vise pickup in Jacksonville, Florida. Bench vises and pipe vises.', keywords: ['old vises', 'bench vises', 'clamping tools'] },
  { slug: 'shop-vacs', name: 'Shop Vacuums', description: 'Free shop vacuum pickup in Jacksonville, Florida. Wet-dry vacuums and shop vacs.', keywords: ['old shop vacs', 'wet-dry vacs', 'workshop vacuums'] },
  { slug: 'wood-lathes', name: 'Wood Lathes', description: 'Free wood lathe pickup in Jacksonville, Florida. Turning lathes and accessories.', keywords: ['old lathes', 'wood turning lathes', 'turning equipment'] },
  { slug: 'planers', name: 'Planers', description: 'Free planer pickup in Jacksonville, Florida. Thickness planers and jointers.', keywords: ['old planers', 'wood planers', 'planing tools'] },
  { slug: 'jointers', name: 'Jointers', description: 'Free jointer pickup in Jacksonville, Florida. Wood jointers for flattening boards.', keywords: ['old jointers', 'wood jointers', 'flattening tools'] },
  { slug: 'bandsaws', name: 'Band Saws', description: 'Free band saw pickup in Jacksonville, Florida. Portable and stationary band saws.', keywords: ['old band saws', 'cutting saws', 'workshop saws'] },

  // Small Vehicles & Parts (186-200)
  { slug: 'go-karts', name: 'Go Karts', description: 'Free go kart pickup in Jacksonville, Florida. All types of go karts and mini bikes.', keywords: ['old go karts', 'go karts', 'mini karts', 'racing karts'] },
  { slug: 'dirt-bikes', name: 'Dirt Bikes', description: 'Free dirt bike pickup in Jacksonville, Florida. Motorcycles and off-road bikes.', keywords: ['old dirt bikes', 'used motorcycles', 'off-road bikes', 'motorcycles'] },
  { slug: 'scooters', name: 'Scooters', description: 'Free scooter pickup in Jacksonville, Florida. Electric and gas scooters.', keywords: ['old scooters', 'electric scooters', 'motor scooters', 'kick scooters'] },
  { slug: 'motorcycles', name: 'Motorcycles', description: 'Free motorcycle pickup in Jacksonville, Florida. All types of motorcycles and parts.', keywords: ['old motorcycles', 'used motorcycles', 'bike donation', 'motorcycle parts'] },
  { slug: 'atvs', name: 'ATVs', description: 'Free ATV pickup in Jacksonville, Florida. Four-wheelers and all-terrain vehicles.', keywords: ['old ATVs', 'four wheelers', 'all-terrain vehicles', 'quad bikes'] },
  { slug: 'golf-carts', name: 'Golf Carts', description: 'Free golf cart pickup in Jacksonville, Florida. Electric and gas golf carts.', keywords: ['old golf carts', 'used golf carts', 'electric carts'] },
  { slug: 'bike-parts', name: 'Bicycle Parts', description: 'Free bike parts pickup in Jacksonville, Florida. Wheels, frames, and components.', keywords: ['bike parts', 'bicycle parts', 'bike components', 'cycling parts'] },
  { slug: 'motorcycle-parts', name: 'Motorcycle Parts', description: 'Free motorcycle parts pickup in Jacksonville, Florida. Engines, frames, and components.', keywords: ['motorcycle parts', 'bike parts', 'motorcycle engines', 'bike components'] },
  { slug: 'engine-parts', name: 'Engine Parts', description: 'Free engine parts pickup in Jacksonville, Florida. Small engine parts and components.', keywords: ['engine parts', 'small engine parts', 'motor parts', 'mechanical parts'] },
  { slug: 'tires-wheels', name: 'Tires & Wheels', description: 'Free tire and wheel pickup in Jacksonville, Florida. Bike, motorcycle, and small vehicle tires.', keywords: ['old tires', 'used wheels', 'bike tires', 'motorcycle tires'] },
  { slug: 'trailers', name: 'Small Trailers', description: 'Free trailer pickup in Jacksonville, Florida. Utility trailers and small cargo trailers.', keywords: ['old trailers', 'utility trailers', 'cargo trailers', 'small trailers'] },
  { slug: 'battery-packs', name: 'Battery Packs', description: 'Free battery pack pickup in Jacksonville, Florida. Vehicle and tool batteries.', keywords: ['old batteries', 'battery packs', 'vehicle batteries', 'tool batteries'] },
  { slug: 'bike-accessories', name: 'Bike Accessories', description: 'Free bike accessory pickup in Jacksonville, Florida. Baskets, racks, and cycling gear.', keywords: ['bike accessories', 'bicycle accessories', 'cycling gear', 'bike racks'] },
  { slug: 'vehicle-scrap', name: 'Vehicle Scrap', description: 'Free vehicle scrap pickup in Jacksonville, Florida. Broken bikes, karts, and small vehicles for parts.', keywords: ['vehicle scrap', 'bike scrap', 'broken vehicles', 'parts vehicles'] },
  { slug: 'exercise-bikes', name: 'Exercise Bikes', description: 'Free exercise bike pickup in Jacksonville, Florida. Stationary bikes and recumbent bikes.', keywords: ['old exercise bikes', 'stationary bikes', 'recumbent bikes', 'indoor cycling'] },
];

// Helper function to get related categories
export function getRelatedCategories(slug: string): typeof pickupCategories[0][] {
  const category = pickupCategories.find(c => c.slug === slug);
  if (!category) return [];
  
  // Group related categories
  const electronics = ['old-electronics', 'smartphones', 'laptops', 'tablets', 'digital-cameras', 'gaming-consoles'];
  const books = ['books', 'textbooks', 'comic-books', 'cookbooks', 'children-books'];
  const collectibles = ['coins', 'stamps', 'trading-cards', 'action-figures', 'sports-memorabilia'];
  const instruments = ['musical-instruments', 'guitars', 'keyboards', 'drums', 'violins'];
  const tools = ['power-tools', 'hand-tools', 'tool-sets', 'wrenches', 'screwdrivers'];
  const sports = ['sports-equipment', 'golf-clubs', 'tennis-rackets', 'bicycles', 'exercise-equipment'];
  
  // Find which group the category belongs to
  let relatedGroup: string[] = [];
  if (electronics.includes(slug)) relatedGroup = electronics;
  else if (books.includes(slug)) relatedGroup = books;
  else if (collectibles.includes(slug)) relatedGroup = collectibles;
  else if (instruments.includes(slug)) relatedGroup = instruments;
  else if (tools.includes(slug)) relatedGroup = tools;
  else if (sports.includes(slug)) relatedGroup = sports;
  
  // Return up to 5 related categories (excluding current)
  return pickupCategories
    .filter(c => relatedGroup.includes(c.slug) && c.slug !== slug)
    .slice(0, 5);
}

