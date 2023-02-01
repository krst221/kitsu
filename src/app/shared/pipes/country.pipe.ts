import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryTransform'
})
export class CountryTransformPipe implements PipeTransform {

  transform(countryCode: any) {
    if(countryCode == 'ar') return 'Árabe';
    else if(countryCode == 'ca_es') return 'Catalán';
    else if(countryCode == 'da_dk') return 'Danés';
    else if(countryCode == 'de_de') return 'Alemán';
    else if(countryCode == 'en') return 'Inglés';
    else if(countryCode == 'en_ar') return 'Árabe (Romanizado)';
    else if(countryCode == 'en_jp') return 'Japonés (Romanji)';
    else if(countryCode == 'en_us') return 'Inglés (Norteamérica)';
    else if(countryCode == 'es_es') return 'Español';
    else if(countryCode == 'fi_fi') return 'Finlandés';
    else if(countryCode == 'fr_fr') return 'Frances';
    else if(countryCode == 'id_id') return 'Indonesio';
    else if(countryCode == 'ja_jp') return 'Japonés';
    else if(countryCode == 'ko_kr') return 'Coreano';
    else if(countryCode == 'pl_pl') return 'Polaco';
    else if(countryCode == 'pt_pt') return 'Portugués';
    else if(countryCode == 'ro_ro') return 'Rumano';
    else if(countryCode == 'ru_ru') return 'Ruso';
    else if(countryCode == 'sv_se') return 'Sueco';
    else if(countryCode == 'vi_vn') return 'Vietnamita';
    else if(countryCode == 'zh_tw') return 'Chino (Tradicional)';
    else return countryCode;
  }
}
