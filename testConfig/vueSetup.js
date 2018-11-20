import { config } from '@vue/test-utils';
import SimpleButton from '@/components/ui/SimpleButton';

config.stubs.SimpleButton = SimpleButton;
config.stubs.FontAwesomeIcon = '<div class="font-awesome-icon"></div>';
