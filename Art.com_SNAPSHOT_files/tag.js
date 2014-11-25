// VDED10188 at 02/09/2014 02:49:36

var veTagData = (function () {
    var _journeycode = 'C2FC3020-58F3-4EF2-B2D3-57F001591AC9';
    var _captureConfigUrl = 'cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig';
    var _chatServicesUrl = 'cdsusa.veinteractive.com/ConversationService.asmx/';
    var _veHostDomain = "//configusa.veinteractive.com";

    var tag = document.getElementById('veConnect');
    if (!tag) {
        var ve = document.createElement('script');
        ve.id = 'veConnect';
        ve.type = 'text/javascript';
        ve.async = true;
        ve.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'configusa.veinteractive.com/scripts/2.2/capture-apps-2.2.1.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ve, s);
    }

    return {

        journeycode: _journeycode,
        captureConfigUrl: _captureConfigUrl,
        chatServicesUrl: _chatServicesUrl,
        veHostDomain: _veHostDomain,
        captureConfig: {
  CaptureUrl: "cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  JourneyCode: "C2FC3020-58F3-4EF2-B2D3-57F001591AC9",
  datareceiverurl: "cdsusa.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  NumberIdentifiedFields: 0,
  JourneyId: 2573,
  customerid: 1001378,
  IdentifyAbandonmentOr: true,
  JourneyTimeOut: 1800,
  Forms: [
    {
      FormId: 8842,
      NumberIdentifiedFields: 0,
      IdentifyAbandonmentOr: true,
      FormURLs: [
        "art.com/asp/place_order-asp/*/posters.htm"
      ],
      Paremeter: [],
      FormFields: [
        {
          FormMappingId: 16958,
          ClientFieldName: "input[id^='ucEditCart_dlCartDisplay']",
          FieldTypeName: "RawSeries",
          IdentifyAbandonment: false,
          HtmlType: "img",
          DomEvent: "DynamicActivity",
          HtmlAttributeTag: "src",
          isEmail: false
        },
        {
          FormMappingId: 16959,
          ClientFieldName: ".cart-product-link",
          FieldTypeName: "RawSeries",
          IdentifyAbandonment: false,
          HtmlType: "a",
          DomEvent: "OnLoad",
          HtmlAttributeTag: "Value",
          isEmail: false
        },
        {
          FormMappingId: 16960,
          ClientFieldName: ".floatLeft.cart-item-text",
          FieldTypeName: "RawSeries",
          IdentifyAbandonment: false,
          HtmlType: "div",
          DomEvent: "OnLoad",
          HtmlAttributeTag: "Value",
          isEmail: false
        },
        {
          FormMappingId: 16961,
          ClientFieldName: ".ItemtotalPrice span",
          FieldTypeName: "RawSeries",
          IdentifyAbandonment: false,
          HtmlType: "span",
          DomEvent: "OnLoad",
          HtmlAttributeTag: "Value",
          isEmail: false
        },
        {
          FormMappingId: 16963,
          ClientFieldName: "SCTotalPriceText.SCTotalPriceTextValue",
          FieldTypeName: "Class",
          IdentifyAbandonment: false,
          HtmlType: "span",
          DomEvent: "OnLoad",
          HtmlAttributeTag: "Value",
          isEmail: false
        },
        {
          FormMappingId: 16964,
          ClientFieldName: "txtEmail",
          FieldTypeName: "Name",
          IdentifyAbandonment: false,
          HtmlType: ":text",
          DomEvent: "DynamicActivity",
          HtmlAttributeTag: "Value",
          isEmail: true
        },
        {
          FormMappingId: 30320,
          ClientFieldName: "loginEmail",
          FieldTypeName: "Name",
          IdentifyAbandonment: false,
          HtmlType: ":text",
          DomEvent: "DynamicActivity",
          HtmlAttributeTag: "Value",
          isEmail: true
        }
      ],
      FormTypeId: 1,
      ChatAgentId: null,
      EmailOptOut: false,
      OptOuts: []
    },
    {
      FormId: 8843,
      NumberIdentifiedFields: 0,
      IdentifyAbandonmentOr: true,
      FormURLs: [
        "URL = art.com/adc.net/root/pages/checkout/default.aspx"
      ],
      Paremeter: [],
      FormFields: [
        {
          FormMappingId: 16967,
          ClientFieldName: "emailAddress",
          FieldTypeName: "Name",
          IdentifyAbandonment: false,
          HtmlType: ":text",
          DomEvent: "DynamicActivity",
          HtmlAttributeTag: "Value",
          isEmail: true
        },
        {
          FormMappingId: 16968,
          ClientFieldName: "txtCoupon",
          FieldTypeName: "Id",
          IdentifyAbandonment: false,
          HtmlType: ":text",
          DomEvent: "DynamicActivity",
          HtmlAttributeTag: "Value",
          isEmail: false
        }
      ],
      FormTypeId: 1,
      ChatAgentId: null,
      EmailOptOut: false,
      OptOuts: []
    },
    {
      FormId: 8844,
      NumberIdentifiedFields: 0,
      IdentifyAbandonmentOr: true,
      FormURLs: [
        "art.com/adc.net/root/Pages/Checkout/Confirmation/OrderConfirmation.aspx"
      ],
      Paremeter: [],
      FormFields: [],
      FormTypeId: 2,
      ChatAgentId: null,
      EmailOptOut: false,
      OptOuts: []
    }
  ],
  OptOutField: 0
},

        /*
            The custom settings are based on the standard defined on Settings.js.
        */
        settings: { domainsToIgnore: ['art.com','art.co.uk','URL = art.com' ], unsupportedBrowsersVersionPlatform: { 'ie' : ['8'] } } ,

        /*
            Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
        */
        customEvents: {}

    };

})();