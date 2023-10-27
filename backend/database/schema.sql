create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);

INSERT INTO item (title) VALUES ("100Pressions"), ("Catégories"), ("Prix");

create table beer (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  type VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  tagline VARCHAR(255) NOT NULL,
  first_brewed VARCHAR(20) NOT NULL,
  description VARCHAR(755) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  abv FLOAT NOT NULL,
  price_per_liter FLOAT NOT NULL,
  volume INTEGER NOT NULL,
  brewers_tips VARCHAR(255) NOT NULL,
  contributed_by VARCHAR(255) NOT NULL
);
INSERT INTO beer (type, name, tagline, first_brewed, description, image_url, abv, price_per_liter, volume, brewers_tips, contributed_by ) VALUES ( "Braun", "Buzz", "A Real Bitter Experience.", "09/2007", "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.", "https://images.punkapi.com/v2/keg.png", "4.5", "9.7", "20", "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.", "Sam Mason <samjbmason>");
INSERT INTO beer (type, name, tagline, first_brewed, description, image_url, abv, price_per_liter, volume, brewers_tips, contributed_by ) VALUES ( "Black", "Trashy Blonde", "You Know You Shouldn't", "04/2008", "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.", "https://images.punkapi.com/v2/2.png", "4.1", "10", "20", "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.", "Sam Mason <samjbmason>");
INSERT INTO beer (type, name, tagline, first_brewed, description, image_url, abv, price_per_liter, volume, brewers_tips, contributed_by ) VALUES ( "Black", "Berliner Weisse With Yuzu - B-Sides", "Japanese Citrus Berliner Weisse.", "11/2015", "Japanese citrus fruit intensifies the sour nature of this German classic.", "https://images.punkapi.com/v2/keg.png", "4.2", "8", "20", "Clean everything twice. All you want is the clean sourness of lactobacillus.", "Sam Mason <samjbmason>");
INSERT INTO beer (type, name, tagline, first_brewed, description, image_url, abv, price_per_liter, volume, brewers_tips, contributed_by ) VALUES ( "IPA", "Pilsen Lager", "Unleash the Yeast Series.", "09/2013", "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.", "https://images.punkapi.com/v2/4.png", "6.3", "7.3", "20", "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.", "Ali Skinner <AliSkinner>");
