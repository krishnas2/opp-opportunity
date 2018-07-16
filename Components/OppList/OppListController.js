({
	doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getOptyList");
        var filtername =event.getParam("OptyListFilter")?event.getParam("OptyListFilter"):component.get("v.FilterName");
        component.set("v.FilterName",filtername);
        action.setParams({ScopeName:filtername});
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.Opportunities", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    EditOpty: function(c,e,h){
        c.set("v.EditOpty",e.getParams("EditOpty"));
    },
    handleSaveSuccess:function(component, event, helper){
        console.log("handled");
        $A.get('e.force:refreshView').fire();
    },
})