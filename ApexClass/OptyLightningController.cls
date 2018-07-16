public with sharing class OptyLightningController {
    public enum OptyScope {mine, Delegated, My_Territory, My_Team_Territory, Team, Everything}
 	@AuraEnabled
    public static List<Opportunity> getOptyList(string ScopeName) {
        List<Opportunity> OptyList;
        if(ScopeName == 'MyOptyList')
        	OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE mine ORDER BY LastModifiedDate DESC LIMIT 5];
        else if(ScopeName == 'MyTeamOptyList')
            OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE Team ORDER BY LastModifiedDate DESC LIMIT 5];
        else if(ScopeName == 'AllOptyList')
            OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE Everything ORDER BY LastModifiedDate DESC LIMIT 5];
        else if(ScopeName == 'MyRegionOptyList')
            OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE My_Territory ORDER BY LastModifiedDate DESC LIMIT 5];
        else if(ScopeName == 'MyTeamRegionOptyList')
            OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE My_Team_Territory ORDER BY LastModifiedDate DESC LIMIT 5];
        else if(ScopeName == 'DelegatedOptyList')
            OptyList = [SELECT Id, Name, Probability, AccountId,StageName, CreatedDate,LastModifiedDate FROM Opportunity USING SCOPE Delegated ORDER BY LastModifiedDate DESC LIMIT 5];
        
        system.debug(OptyList);
        
        return OptyList ;
    }
    
    @AuraEnabled
    public static Opportunity saveOpty(Opportunity Oppty) {
        // Perform isUpdatable() checking first, then
        upsert Oppty;
        return Oppty;
    }
}