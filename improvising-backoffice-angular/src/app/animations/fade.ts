import { animate, query, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter',
            [style({ opacity: 0, position: 'absolute' })],
            { optional: true }
        ),
        query(':leave',
            [
                style({ opacity: 1 }),
                animate('0.5s', style({ opacity: 0 }))
            ],
            { optional: true }
        ),
        query(':enter',
            [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 }))
            ],
            { optional: true }
        )
    ])
]);