({
	EditOpp : function(component, event, helper) {
        var elements = component.getElement().children;
        var id = "";
        var actionType = "";
        if(event.srcElement != null && event.srcElement.checked)
        {
            actionType = "NewOptyProduct";
            id = event.srcElement.value;
        }
        else if(event.srcElement == null){
            id=event.getSource().get("v.value");
        }
        var createEvent = component.getEvent("EditOpty");
        
        if(actionType == "NewOptyProduct")
        {
            createEvent.setParams({ "EditOpty": id,"EditOptyType": actionType});
            createEvent.fire();
        }
        else if(id!="")
        {
            createEvent.setParams({ "EditOpty": id,"EditOptyType": ""});
            createEvent.fire();
        }
        
		
	}
})