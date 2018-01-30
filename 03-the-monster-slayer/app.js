new Vue({
    el: '#app',
    data: {
        show_panel: false,
        health: {
            player: 0,
            monster: 0
        },
        logs: []
    },
    methods: {
        start_new_game() {
            this.show_panel = true;
            this.health.player = 100;
            this.health.monster = 100;
            this.logs = [];
            this.logs.unshift({ class: '', value: 'GAME STARTED' });
        },
        add_log(log) {
            this.log.unshift(log);
        },
        attack() {
            var player_damage = this.calculate_damage();
            var monster_damage = this.calculate_damage();

            this.health.player -= monster_damage;
            if (this.checkWin()) { return; }
            this.health.monster -= player_damage;
            if (this.checkWin()) { return; }

            this.logs.unshift({ class: 'player-turn', value: 'PLAYER HITS MONSTER FOR ' + player_damage });
            this.logs.unshift({ class: 'monster-turn', value: 'MONSTER HITS PLAYER FOR ' + monster_damage });
        },
        heal() {
            var monster_damage = this.calculate_damage();

            if (this.health.player <= 90) {
                this.health.player += 10;
            } else {
                this.health.player = 100;
            }

            this.health.player -= monster_damage;
            if (this.checkWin()) { return; }

            this.logs.unshift({ class: 'player-turn', value: 'PLAYER HEAL HIMSELF FOR ' + 10 });
            this.logs.unshift({ class: 'monster-turn', value: 'MONSTER HITS PLAYER FOR ' + monster_damage });
        },
        special_attack() {
            var player_damage = this.calculate_damage() * 2;
            var monster_damage = this.calculate_damage();

            this.health.player -= monster_damage;
            if (this.checkWin()) { return; }
            this.health.monster -= player_damage;
            if (this.checkWin()) { return; }

            this.logs.unshift({ class: 'player-turn', value: 'PLAYER HITS MONSTER FOR ' + player_damage });
            this.logs.unshift({ class: 'monster-turn', value: 'MONSTER HITS PLAYER FOR ' + monster_damage });
        },
        give_up() {
            if (confirm('You lost, play again ?')) {
                this.start_new_game();
            } else {
                this.show_panel = false;
            }
        },
        calculate_damage() {
            return Math.round(Math.random() * 10);
        },
        checkWin() {
            if (this.health.monster <= 0) {
                if (confirm('You win, play again ?')) {
                    this.start_new_game();
                } else {
                    this.show_panel = false;
                }
                return true;
            } else if (this.health.player <= 0) {
                if (confirm('You lost, play again ?')) {
                    this.start_new_game();
                } else {
                    this.show_panel = false;
                }
                return true;
            }
            return false;
        }
    },
    computed: {
        playerHealth() {
            return { 'width': this.health.player + '%' };
        },
        monsterHealth() {
            return { 'width': this.health.monster + '%' };
        }
    }
})