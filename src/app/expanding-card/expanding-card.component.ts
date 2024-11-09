import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-card',
  standalone: true,
  imports: [],
  templateUrl: './expanding-card.component.html',
  styleUrl: './expanding-card.component.css'
})
export class ExpandingCardComponent implements OnInit {
  ngOnInit(): void {
    const panels = document.querySelectorAll<HTMLElement>('.panel');

    const removeActiveClasses = (): void => {
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    };

    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
      });
    });
  }

  

}
