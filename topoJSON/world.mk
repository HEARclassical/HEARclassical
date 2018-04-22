GENERATED_FILES = \
	world.json

all: $(GENERATED_FILES)

clean:
	rm -rf -- %(GENERATED_FILES)

.PHONY: all clean

build/ne_50m_admin_0_countries.zip:
	mkdir -p $(dir $@)
	curl -LOko $@ 'http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/cultural/$(notdir $@)'
	mv ne_50m_admin_0_countries.zip build/ne_50m_admin_0_countries.zip

build/ne_50m_admin_0_countries.shp: build/ne_50m_admin_0_countries.zip
	unzip -d $(dir $@) $<
	touch $@

world.json: build/ne_50m_admin_0_countries.shp sphere.json
	topo2geo \
		-q 1e5 \
		--projection='width = 960, height = 960, d3.geoEquirectangular() \
				.translate([width / 2, height / 2]) \
				.scale((width - 1) / 2 / Math.PI)' \
		-- \
		countries=build/ne_50m_admin_0_countries.shp \
		sphere=sphere.json | \
			topomerge  \
				--io countries \
				--oo land \
				-o $@