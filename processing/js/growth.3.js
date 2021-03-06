// this code was autogenerated from PJS
(function($p) {
    var Growth = (function() {
        function Growth() {
            throw 'Unable to create the interface';
        }
        Growth.$isInterface = true;
        Growth.$methods = ['grow'];
        return Growth;
    })();
    $p.Growth = Growth;
    var Seed = (function() {
        function Seed() {
            var $this_1 = this;

            function $superCstr() {
                $p.extendClassChain($this_1)
            }
            $this_1.count = 0;
            $this_1.mx = 0;
            $this_1.yRad = 0;
            $this_1.xRad = 0;
            $this_1.xPos = 0;
            $this_1.yPos = 0;
            $this_1.speed = 0;
            $this_1.growth = 0;
            $this_1.fil = 0x00000000;
            $this_1.stk = 0x00000000;

            function plant$0() {
                $this_1.yRad = $p.random(1, 20);
                $this_1.xRad = $this_1.yRad - 20;

                $this_1.xPos = $p.random(200, screen.width - 200);
                $this_1.yPos = $p.random(200, screen.height - 200);
                $this_1.speed = $p.random(.9, 1);
                $this_1.growth = $p.random(.9, 1);
                $this_1.fil = $p.color(00, $p.random(255), $p.random(255));
                $this_1.stk = $p.color(000);

                $p.println("yRad: " + $this_1.yRad + " xPos: " + $this_1.xPos + " yPos: " + $this_1.yPos + " speed: " + $this_1.speed + " growth: " + $this_1.speed);
            }
            $p.addMethod($this_1, 'plant', plant$0);

            function grow$0() {
                $this_1.count++;
                if ($this_1.count > $this_1.mx) {
                    $this_1.$self.plant();
                    $this_1.mx = $p.random(1000);
                    $this_1.count = 0;
                }

                $this_1.yPos += (yos * $this_1.speed) / 1000;
                $this_1.yRad += ($this_1.yRad * $this_1.growth) / 100;
                $this_1.xRad += ($this_1.xRad * $this_1.growth) / 100;

                $p.fill($this_1.fil, 10);
                $p.stroke($this_1.stk, 20);

                $this_1.$self.draw();
            }
            $p.addMethod($this_1, 'grow', grow$0);

            function draw$0() {
                $p.ellipse($this_1.xPos, $this_1.yPos, $this_1.yRad, $this_1.xRad);
            }
            $p.addMethod($this_1, 'draw', draw$0);

            function $constr_0() {
                $superCstr();

                $this_1.mx = $p.random(1000);
                $this_1.count = 0;
                $this_1.$self.plant();
            }

            function $constr() {
                if (arguments.length === 0) {
                    $constr_0.apply($this_1, arguments);
                } else $superCstr();
            }
            $constr.apply(null, arguments);
        }
        $p.extendInterfaceMembers(Seed, Growth);
        Seed.$interfaces = [Growth];
        return Seed;
    })();
    $p.Seed = Seed;

    var growth = $p.createJavaArray('Growth', [10]);

    function setup() {
        $p.println("Growth.3.pde");

        $p.size(screen.width, screen.height);
        $p.background(0xFF282828);
        $p.frameRate(60);

        for (var i = 0; i < 10; ++i) {
            growth[i] = new Seed();
        }
    }
    $p.setup = setup;

    function draw() {
        for (var i = 0; i < growth.length; ++i) {
            growth[i].grow();
        }
    }
    $p.draw = draw;

})