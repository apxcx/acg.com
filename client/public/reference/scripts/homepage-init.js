/* Original ACG homepage frontend initialization, preserved in order. */
document.addEventListener('DOMContentLoaded', function(){     if (!window.BreakdanceFrontend) {
        window.BreakdanceFrontend = {}
    }

    window.BreakdanceFrontend.data = {"homeUrl":"","ajaxUrl":"","elementsPluginUrl":"/reference/elements/","BASE_BREAKPOINT_ID":"breakpoint_base","breakpoints":[{"id":"breakpoint_base","label":"Desktop","defaultPreviewWidth":"100%"},{"id":"breakpoint_tablet_landscape","label":"Tablet Landscape","defaultPreviewWidth":1024,"maxWidth":1119},{"id":"breakpoint_tablet_portrait","label":"Tablet Portrait","defaultPreviewWidth":768,"maxWidth":1023},{"id":"breakpoint_phone_landscape","label":"Phone Landscape","defaultPreviewWidth":480,"maxWidth":767},{"id":"breakpoint_phone_portrait","label":"Phone Portrait","defaultPreviewWidth":400,"maxWidth":479}],"subscriptionMode":"pro"} }) 

document.addEventListener('DOMContentLoaded', function(){ new BreakdanceHeaderBuilder(".breakdance .bde-header-builder-293-100", "100", false); }) 

document.addEventListener('DOMContentLoaded', function(){ 
new AwesomeMenu(".breakdance .bde-menu-293-126 .breakdance-menu", {
  dropdown: {
    openOnClick: false,
    mode: {
      desktop: 'dropdown'
    },
    placement: 'left',
    width: null,
    animation: 'fade'
  },
  link: {
    effect: '',
    effectDirection: '',
  },
  mobile: {
    breakpoint: 'breakpoint_phone_landscape',
    mode: 'accordion',
    offcanvasPosition: 'left',
    offset: null,
    followLinks: true
  }
});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-101',
              {"animation_type":"slideUp","advanced":{"once":false,"offset":null,"distance":{"number":40,"unit":"px","style":"40px"}},"duration":{"number":800,"unit":"ms","style":"800ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-text-30-106',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":100,"unit":"ms","style":"100ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-button-30-107',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-114', {"title":"Participants","duration":{"number":1000,"unit":"ms","style":"1000ms"},"start":0,"end":28,"suffix":"k+","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-123', {"title":"Years of experience","duration":{"number":1000,"unit":"ms","style":"1000ms"},"start":0,"end":20,"suffix":"+","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-124', {"title":"Countries worldwide","duration":{"number":1000,"unit":"ms","style":"1000ms"},"start":0,"end":15,"suffix":"+","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1588', {"title":"Clients Served","duration":{"number":1000,"unit":"ms","style":"1000ms"},"start":0,"end":1000,"suffix":"+","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceParallax(
              '.breakdance .bde-image2-30-131',
              {"enabled":true,"scale":{"middle":1.2,"end":1.4,"start":1}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-138',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-140',
              {"animation_type":"flipUp","advanced":{"distance":{"number":60,"unit":"px","style":"60px"}},"duration":{"number":1000,"unit":"ms","style":"1000ms"},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-149',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-158', {"title":"CLIENTS","duration":{"number":1000,"unit":"ms","style":"1000ms"},"start":0,"end":1000,"suffix":null,"ease_count":false,"html_tags":{"title":"div"}});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-175',
              {"animation_type":"slideRight","duration":{"number":800,"unit":"ms","style":"800ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceFaq('.breakdance .bde-frequently-asked-questions-30-170', { accordion: false, openFirst: false  });
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-181',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-183',
              {"animation_type":"flipDown","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-image-hover-card-30-1120',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":400,"unit":"ms","style":"400ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-179',
              {"animation_type":"slideRight","duration":{"number":800,"unit":"ms","style":"800ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceAdvancedAccordion('.breakdance .bde-accordion-30-466', { accordion: null, openFirst: null } );
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-219',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-222',
              {"animation_type":"flipUp","duration":{"number":900,"unit":"ms","style":"900ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-224',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-238',
              {"animation_type":"slideUp","delay":{"number":400,"unit":"ms","style":"400ms"},"duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-233',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":600,"unit":"ms","style":"600ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-1597',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-255',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-257',
              {"animation_type":"flipUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
window.BreakdanceSwiper().update({
            id: 'bde-advancedslider-30-1151',
            selector:'.breakdance .bde-advancedslider-30-1151',
            settings:{"effect":"slide","coverflow":{"shadow":false,"depth":{"number":1,"unit":"px","style":"1px"},"rotate":{"number":1,"unit":"px","style":"1px"}},"advanced":{"slides_per_view":{"breakpoint_base":3,"breakpoint_phone_landscape":1},"initial_slide":1,"between_slides":{"breakpoint_base":{"number":24,"unit":"px","style":"24px"}},"auto_height":false,"disable_keyboard_control":true,"swipe_on_scroll":false,"play_animations_on":null,"slides_per_group":{"breakpoint_base":3,"breakpoint_phone_landscape":1},"one_per_view_at":"breakpoint_tablet_portrait"},"infinite":"disabled","center_slides":false,"autoplay":"disabled","speed":{"number":2000,"unit":"ms","style":"2000ms"}},
            paginationSettings:{"type":"bullets","margin":{"breakpoint_base":{"number":50,"unit":"px","style":"50px"}},"bullets":{"color":"var(--bde-brand-primary-color)","size":{"breakpoint_base":{"number":12,"unit":"px","style":"12px"}}},"overlay":false},
          });
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-advancedslider-30-1151',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":300,"unit":"ms","style":"300ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-311',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-313',
              {"animation_type":"flipUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":100,"unit":"ms","style":"100ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-555',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-565',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":500,"unit":"ms","style":"500ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-584',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-338',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-340',
              {"animation_type":"flipUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":100,"unit":"ms","style":"100ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
window.BreakdanceSwiper().update({
            id: 'bde-advancedslider-30-605',
            selector:'.breakdance .bde-advancedslider-30-605',
            settings:{"effect":"slide","coverflow":{"depth":{"number":1,"unit":"px","style":"1px"},"rotate":{"number":1,"unit":"px","style":"1px"},"stretch":null,"shadow":false},"advanced":{"slides_per_view":{"breakpoint_base":2},"initial_slide":1,"between_slides":{"breakpoint_base":{"number":27,"unit":"px","style":"27px"}},"sync_with_another_slider":false,"one_per_view_at":"breakpoint_tablet_portrait"},"autoplay":"disabled","center_slides":false},
            paginationSettings:{"type":"none"},
          });
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-advancedslider-30-605',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-601', {"title":"Projects Delivered","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-603', {"title":"Cost Reduction","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":60,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-602', {"title":"Uptime","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":99.9,"suffix":"%","ease_count":true,"format_number":true,"separator":"dot"});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1145', {"title":"Projects Delivered","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1146', {"title":"Cost Reduction","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":60,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1147', {"title":"Uptime","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":99.9,"suffix":"%","ease_count":true,"format_number":true,"separator":"dot"});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1136', {"title":"Projects Delivered","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1137', {"title":"Cost Reduction","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":60,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1138', {"title":"Uptime","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":99.9,"suffix":"%","ease_count":true,"format_number":true,"separator":"dot"});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1127', {"title":"Projects Delivered","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1128', {"title":"Cost Reduction","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":60,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1129', {"title":"Uptime","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":99.9,"suffix":"%","ease_count":true,"format_number":true,"separator":"dot"});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-693',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-695',
              {"animation_type":"flipUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":100,"unit":"ms","style":"100ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-columns-30-688',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
window.BreakdanceSwiper().update({
            id: 'bde-advancedslider-30-747',
            selector:'.breakdance .bde-advancedslider-30-747',
            settings:{"advanced":{"slides_per_view":{"breakpoint_base":1},"one_per_view_at":null},"autoplay":"enabled","infinite":"enabled","effect":"slide"},
            paginationSettings:{"type":"none"},
          });
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1418', {"title":"Faster reporting and analytics","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1420', {"title":"Client Approval And Satisfaction Level","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":95,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1579', {"title":"Faster reporting and analytics","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1581', {"title":"Client Approval And Satisfaction Level","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":95,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1561', {"title":"Faster reporting and analytics","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1563', {"title":"Client Approval And Satisfaction Level","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":95,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1543', {"title":"Faster reporting and analytics","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":250,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceCounter('.breakdance .bde-simple-counter-30-1545', {"title":"Client Approval And Satisfaction Level","duration":{"number":5000,"unit":"ms","style":"5000ms"},"start":0,"end":95,"suffix":"%","ease_count":false});
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-450',
              {"animation_type":"slideLeft","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-1042',
              {"animation_type":"zoomOut","duration":{"number":600,"unit":"ms","style":"600ms"},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-455',
              {"animation_type":"slideRight","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceFaq('.breakdance .bde-frequently-asked-questions-30-456', { accordion: false, openFirst: false  });
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-30-462',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":30,"unit":"px","style":"30px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-heading-30-464',
              {"animation_type":"flipUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":60,"unit":"px","style":"60px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-button-30-1046',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-1048',
              {"animation_type":"slideLeft","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-30-1050',
              {"animation_type":"slideRight","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}},"delay":{"number":200,"unit":"ms","style":"200ms"}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-365-145',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-365-146',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":100,"unit":"ms","style":"100ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-column-365-147',
              {"animation_type":"slideUp","duration":{"number":800,"unit":"ms","style":"800ms"},"delay":{"number":200,"unit":"ms","style":"200ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 

document.addEventListener('DOMContentLoaded', function(){ 
new BreakdanceEntrance(
              '.breakdance .bde-div-365-132',
              {"animation_type":"slideUp","delay":{"number":300,"unit":"ms","style":"300ms"},"duration":{"number":800,"unit":"ms","style":"800ms"},"advanced":{"distance":{"number":20,"unit":"px","style":"20px"}}}
            )
 }) 
