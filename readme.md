#Art.com Responsive CSS Extensions

The following is a collection of CSS classes which add responsive behaviors to existing CMS content (markup patterns) already in use on Art.com.

These classes are implemented as high-level extensions such that a web designer should be able to easily add responsive behaviors to new and existing CMS content. After a brief initial tutorial, ongoing usage should not require extensive assistance from the technology group. 

These classes should be viewed as layout prototypes which are extended as new (responsive) module patterns are added over time.



##Development installation

_note: NPM is required._
cd to the root project directory and run...

    $ npm install




##Previewing with a local server

cd to the root project directory and run...

    $ node server.js


##Compiling .less

cd to the root project directory and run...

    $ gulp

This will start the less watcher and compiler -- which is configured to watch `styles.less` and compile this into CSS at `css/styles.css`

To exit...

    ctrl+c


##Client Installation

An example...

    <!-- MQ EXTENTIONS -->
        <meta name="viewport" content="width=device-width">
	    <link rel="stylesheet" type="text/css" href="css/styles.css" />
	    <script type="text/javascript" src="js/artMqExtensions.js"></script>
    <!-- END MQ EXTENTIONS -->
*The code block above is required to enable the classes listed in this document.*

*NOTE: These files will need to be properly appended/mapped to a sensible production codebase location.*

##Implementation

An example...


    <div class="herocontainer track-group heroBlock" id="P2A_Sale">
	    <div class="hero" onclick="link('/photostoart')">
		    <img src="http://cache1.artprintimages.com/images/jump_pages/rebrand/homepage/flyouts/p2a_sale/home_p2a.jpg" alt="Photos to Art 50% off Use Code NXC966">
	    </div>
    </div>

*In the above code block the `.heroBlock` class was added to the class list of the `#P2A_Sale` element.  With this class added the block now behaves responsively to media query changes.*  


##Class Definitions


###.heroBlock

A hero image zoom that resizes/re-crops a static hero image.

_NOTE: Iterations of this class could, for example, load different images for different screen resolutions instead of resizing one single image as shown in this example. This is a prominent content type and it's likely that there will be many variants of this class in particular._


<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_0_heroBlock_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_0_heroBlock_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_0_heroBlock_2_tablet_h.png"></td>
    </tr>
</table>




### .oneByEight_categories

A single title and stacking subtitle displayed across the width of the outermost container with eight horizontally stacking content images.

<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_1_oneByEight_categories_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_1_oneByEight_categories_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_1_oneByEight_categories_2_tablet_h.png"></td>
    </tr>
</table>








### .fourStacked_feature

Four horizontally stacking content boxes – larger featured content.

<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_2_fourStacked_feature_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_2_fourStacked_feature_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_2_fourStacked_feature_2_tablet_h.png"></td>
    </tr>
</table>







### .fourStacked_subFeature

Four horizontally stacking content boxes – smaller sub-featured content.

<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_3_fourStacked_subFeature_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_3_fourStacked_subFeature_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_3_fourStacked_subFeature_2_tablet_h.png"></td>
    </tr>
</table>








### .responsiveFooter

Four horizontally stacking content boxes – smaller sub-featured content.

<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_4_footer_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_4_footer_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_4_footer_2_tablet_h.png"></td>
    </tr>
</table>




### .responsiveHeader

Four horizontally stacking content boxes – smaller sub-featured content.

<table>
    <thead>
        <tr>
            <th>Phone 320h</th>
            <th>Tablet 568h</th>
            <th>Laptop 1024h</th>
        </tr>
    </thead>
    <tr valign="top">
        <td><img src="docs/bitmaps_reference/0_5_responsiveHeader_0_phone.png"></td>
        <td><img src="docs/bitmaps_reference/0_5_responsiveHeader_1_tablet_v.png"></td>
        <td><img src="docs/bitmaps_reference/0_5_responsiveHeader_2_tablet_h.png"></td>
    </tr>
</table>











