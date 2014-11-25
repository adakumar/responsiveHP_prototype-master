// WebTrends SmartSource Data Collector Async Tag
// Version: 9.4.2

var dcsQ = [{ cmd: "collect"}];
(function() {
    var s, s2;
    s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = glbWebTrendFilePath;
    s2 = document.getElementsByTagName("script")[0];
    s2.parentNode.insertBefore(s, s2);
})();


//Code to include tags for landing pages
function findURLForLandingPages(curr) {
    var url = window.location.href;
    var setOfLandingPages = new Array();
    setOfLandingPages[0] = "frenchmuseum";
    setOfLandingPages[1] = "springtrends";
    setOfLandingPages[2] = "giftguide";
    setOfLandingPages[3] = "springcatalog";
    setOfLandingPages[4] = "lifeinmotion";
    setOfLandingPages[5] = "museumglass";
    setOfLandingPages[6] = "shopbystyle";
    setOfLandingPages[7] = "holidaycatalog2010";
    setOfLandingPages[8] = "holidaycat2010";
    setOfLandingPages[9] = "KaboodliciousHome";
    setOfLandingPages[10] = "mastercard2";
    setOfLandingPages[11] = "harpers";
    setOfLandingPages[12] = "hearst";
    setOfLandingPages[13] = "giftsfordad";
    

    
    var isLanding;
    var pageName;
    var index = url.indexOf("/landing/");
    var index1 = url.indexOf("/business/");
    if (index != -1 && index1 == -1) {
        var wt_cg = document.createElement("meta");
        //window.getSelection ? wt_cg.name = 'WT.cg_n' : wt_cg.Name = 'WT.cg_n';
        wt_cg.name = 'WT.cg_n';
        wt_cg.content = "Landing Page";
        document.getElementsByTagName("head")[0].appendChild(wt_cg);
        var wt_curr = document.createElement("meta");
        //window.getSelection ? wt_curr.name = 'WT.z_cur' : wt_curr.Name = 'WT.z_cur';
        wt_curr.name = 'WT.z_cur';
        wt_curr.content = curr;
        document.getElementsByTagName("head")[0].appendChild(wt_curr);
    }
    else {
        for (var i = 0, len = setOfLandingPages.length; value = setOfLandingPages[i], i < len; i++) {
            isLanding = url.search(value);
            if (isLanding != -1) {
                var wt_cg = document.createElement("meta");
                //window.getSelection ? wt_cg.name = 'WT.cg_n' : wt_cg.Name = 'WT.cg_n';
                wt_cg.name = 'WT.cg_n';
                wt_cg.content = "Landing Page";
                document.getElementsByTagName("head")[0].appendChild(wt_cg);
                var wt_curr = document.createElement("meta");
                //window.getSelection ? wt_curr.name = 'WT.z_cur' : wt_curr.Name = 'WT.z_cur';
                wt_curr.name = 'WT.z_cur';
                wt_curr.content = curr;
                document.getElementsByTagName("head")[0].appendChild(wt_curr);
                break;
            }
        }
    }
}
//WEBTRENDS END

