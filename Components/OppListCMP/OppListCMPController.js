({
    "HandleEditOpty":function(component, event, helper) {
		component.set("v.EditOpty",event.getParam("EditOpty"));
        component.set("v.EditOptyType",event.getParam("EditOptyType"));
        if(event.getParam("EditOptyType") == "NewOptyProduct"){
            component.set("v.ShowFastOptyLineItemOverLay","show");
        }
        else{
         component.set("v.ShowEditOpty","ShowEditOptyOverlay");   
        }
        
        
	},
    "handlenavigation":function(component, event, helper){
        console.log("handler success toast");
    },
    "handleMenuSelect":function(cmp, e) {
        var selectedMenuItemValue = e.getParam("value");
        if(selectedMenuItemValue == "NewOpty"){
            cmp.set("v.ShowNewOpty","Show");
            /*
            var navService = cmp.find("navService");
            var workspaceAPI = cmp.find("workspace");
            var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__NewOptyForm'
            },
                state:{
                    "ShowNewOpty":"Show"
                }
        };
        cmp.set("v.pageReference", pageReference);
        //var pageReference = cmp.get("v.pageReference");
           // e.preventDefault();
            workspaceAPI.openSubtab({
            pageReference:  {
            type: 'standard__component',
            attributes: {
                componentName: 'c__NewOptyForm'
            },
                state:{
                     "uid": "1",
                    "ShowNewOpty":"Show"
                }
        }
        }).then(function(tabId) {
            console.log("The new subtab ID is:" + tabId);
        }).catch(function(error) {
            console.log("error");
        });
			
		navService.navigate(pageReference);
            */
        }
        else if(selectedMenuItemValue == "AddActivity")
        {
            var createRecordEvent = $A.get("e.force:createRecord");
            createRecordEvent.setParams({
                "entityApiName": "Task",
                "navigationLocation":"LOOKUP",
                "panelOnCreateCallback":function(event){
                console.log(event);
            }
            });
            createRecordEvent.fire();
        }
        else if(selectedMenuItemValue == "AddProduct")
        {
            /*var createRecordEvent = $A.get("e.force:createRecord");
            createRecordEvent.setParams({
                "entityApiName": "OpportunityLineItem"
            });
            createRecordEvent.fire();*/
            cmp.set("v.ShowFastOptyLineItemOverLay","show");
        }
    }
  }
)