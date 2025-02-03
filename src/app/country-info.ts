interface Region {
    id: string;
    iso2code: string;
    value: string;
}

interface IncomeLevel {
    id: string; 
    iso2code: string; 
    value: string 
}

export interface CountryInfo {
    id: string;
    iso2Code: string;
    name: string;
    region: Region;
    adminregion: { id: string; iso2code: string; value: string };
    incomeLevel: IncomeLevel
    lendingType: { id: string; iso2code: string; value: string };
    capitalCity: string;
    longitude: string;
    latitude: string;
}
