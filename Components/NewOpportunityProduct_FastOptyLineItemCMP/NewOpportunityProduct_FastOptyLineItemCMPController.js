({
	EditOpty : function(component, event, helper) {
		component.set("v.EditOpty",event.getParams("EditOpty"));
        component.getElement().classList.remove("EditOpty");
	},
    SaveEditOpty: function(c,e,h){
        c.set("v.ShowFastOptyLineItemOverLay","hide");
    },
    CancelEditOpty: function(c,e,h){
        c.set("v.ShowFastOptyLineItemOverLay","hide");
    }
})