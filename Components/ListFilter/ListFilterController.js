({
    onSingleSelectChange: function (component, event, helper) {
        var elements = component.getElement().children;
        var Filter = event.getSource().get("v.value");
        var createEvent = component.getEvent("OptyListFilterChange");
        createEvent.setParams({ "OptyListFilter": Filter });
        createEvent.fire();
    }
})