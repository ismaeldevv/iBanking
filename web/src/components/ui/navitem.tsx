import React from 'react';
import { Button } from './button';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { cn } from '../../lib/utils';

interface Props {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  active?: boolean;
  exit?: boolean;
}

const NavItem: React.FC<Props> = (props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant={props.active ? 'default' : 'ghost'}
          className={cn('h-[50px] w-[50px] rounded-', !props.active && 'hover:bg-secondary', props.active && 'hover:bg-secondary')}
          onClick={() => props.onClick()}
        >
          <props.icon color={props.exit ? 'hsl(var(--primary))' : undefined} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">{props.label}</TooltipContent>
    </Tooltip>
  );
};

export default NavItem;
