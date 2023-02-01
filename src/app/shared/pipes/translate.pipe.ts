import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(category: string) {
    if (category == 'Comedy') return 'comedia';
    else if (category == 'Romance') return 'romance';
    else if (category == 'Drama') return category.toLowerCase();
    else if (category == 'Adventure') return 'aventura';
    else if (category == 'Yaoi') return category.toLowerCase();
    else if (category == 'Shoujo Ai') return category.toLowerCase();
    else if (category == 'Sports') return 'deportes';
    else if (category == 'Magic') return 'magia';
    else if (category == 'Japan') return 'Japón';
    else if (category == 'Music') return 'música';
    else if (category == 'Earth') return 'planeta Tierra';
    else if (category == 'Supernatural') return 'sobrenatural';
    else if (category == 'Present') return 'presente';
    else if (category == 'Shounen') return category.toLowerCase();
    else if (category == 'Martial Arts') return 'artes marciales';
    else if (category == 'Super Power') return 'súper poderes';
    else if (category == 'Fantasy World') return 'mundo fantástico';
    else if (category == 'Shoujo') return category.toLowerCase();
    else if (category == 'Violence') return 'violencia';
    else if (category == 'Fantasy') return 'fantasía';
    else if (category == 'Action') return 'acción';
    else if (category == 'School Life') return 'vida escolar';
    else if (category == 'Slice of Life') return 'vida diaria';
    else if (category == 'Science Fiction') return 'ciencia ficción';
    else if (category == 'Ecchi') return category.toLowerCase();
    else if (category == 'Historical') return 'historia';
    else if (category == 'Harem') return category.toLowerCase();
    else if (category == 'Thriller') return 'suspenso';
    else if (category == 'Psychological') return 'psicológico';
    else if (category == 'Kids') return 'niños';
    else if (category == 'Horror') return category.toLowerCase();
    else if (category == 'Shounen Ai') return category.toLowerCase();
    else if (category == 'Mecha') return 'mechas';
    else if (category == 'Seinen') return category.toLowerCase();
    else if (category == 'Demon') return 'demonios';
    else if (category == 'Isekai') return category.toLowerCase();
    else if (category == 'Military') return 'militares';
    else if (category == 'Plot Continuity') return 'continuidad de trama';
    else return category;
  }

}
